
import {CANVASSCENEW, CANVASSCENEH, SCENEH, EMPTYCHAR, after} from '../misc'
import CanvasComponent from '../canvasComponent'
import RAF from '../raf'
import Keyboard from '../keyboard'
import Control from '../control'
import Collision from '../collision'

import GraphicalTextContainer from '../components/container/GraphicalTextContainer'
import L11Container from '../components/container/L11Container'
import NPCContainer from '../components/container/NPCContainer'
import NPC from '../components/npc/NPC'
import PlayerBoxComponent from '../components/PlayerBoxComponent'
import Stat from '../stat'

import {SFX, Music} from '../sound'

class Display {

	static clear(scene) {
		Collision.DeleteLastPXPYWHMap()
		Control.clear()
		const components = scene.getAllBindings()
		const componentsForAnimation = scene.getBindedComponentsForAnimation()
		components.map(component => component.componentIdentifier).forEach(componentIdentifier => scene.unbindComponent(componentIdentifier))
		while (0 < componentsForAnimation.length) scene.unbindComponentForAnimation(componentsForAnimation[0])
	}
	
	static I0(scene) {
		const [TX1, TX2, TXS, ESImageIdentifier, BGIdentifier] = ['2018 PROGRAMMED BY NEUMANN IVAN', 'PRESS ENTER TO START', 1.75, 'es', 'bg']
		const [DURATION, DELAY, GTCRE, U] = [250, 1500, /^gtc\-/]

		let [inittime, animationStage1, animationStage2, animationStage3, animationStage4, animationStage5, animationStage6, animationStage7, animationStage8, animationStage9, animationStage10] = []
		
		const durationIndex = (time, duration, index) => {
			if (!inittime) inittime = time
			if ((index = (time - inittime) / duration) >= 1) {
				index = 1
				inittime = U
			}
			return index
		}
		
		scene.bindComponent(new CanvasComponent(CANVASSCENEW, CANVASSCENEH, '#000', 0, 0), BGIdentifier)
		scene.bindComponent(new CanvasComponent(128, 128, CanvasComponent.SPRITES.ES, (CANVASSCENEW - 128) / 2, (CANVASSCENEH - 128) / 2, 'image', U, U, U, U, 0), ESImageIdentifier)
		scene.bindComponent(new GraphicalTextContainer(TX1, (CANVASSCENEW - 7 * TXS * TX1.length) / 2, (CANVASSCENEH - 7 * TXS) / 2, TXS, U, U, 0))
		scene.render(true)

		RAF.launch(time => {
			let DURATIONINDEX;
			if (!animationStage1) {
				DURATIONINDEX = durationIndex(time, DELAY)
				if (DURATIONINDEX < 1) return false
				else animationStage1 = true
			}
			else if (!animationStage2) {
				DURATIONINDEX = durationIndex(time, DURATION)
				scene.getAllBindings().filter(component => GTCRE.test(component.componentIdentifier)).map(component => component.component).forEach(component => component.alpha = DURATIONINDEX)
				if (DURATIONINDEX == 1) animationStage2 = true
			}
			else if (!animationStage3) {
				DURATIONINDEX = durationIndex(time, DELAY)
				if (DURATIONINDEX < 1) return false
				else animationStage3 = true
			}
			else if (!animationStage4) {
				DURATIONINDEX = durationIndex(time, DURATION)
				const components = scene.getAllBindings().filter(component => GTCRE.test(component.componentIdentifier))
				components.map(component => component.component).forEach(component => component.alpha = 1 - DURATIONINDEX)
				if (DURATIONINDEX == 1) {
					components.map(component => component.componentIdentifier).forEach(componentIdentifier => scene.unbindComponent(componentIdentifier))
					animationStage4 = true
				}
			}
			else if (!animationStage5) {
				DURATIONINDEX = durationIndex(time, DELAY / 2)
				if (DURATIONINDEX < 1) return false
				else animationStage5 = true
			}
			else if (!animationStage6) {
				DURATIONINDEX = durationIndex(time, DURATION)
				scene.getBindedComponent(ESImageIdentifier).alpha = DURATIONINDEX
				if (DURATIONINDEX == 1) animationStage6 = true
			}
			else if (!animationStage7) {
				DURATIONINDEX = durationIndex(time, DELAY)
				if (DURATIONINDEX < 1) return false
				else animationStage7 = true
			}
			else if (!animationStage8) {
				DURATIONINDEX = durationIndex(time, DURATION)
				scene.getBindedComponent(ESImageIdentifier).alpha = 1 - DURATIONINDEX
				if (DURATIONINDEX == 1) animationStage8 = true
			}
			else if (!animationStage9) {
				DURATIONINDEX = durationIndex(time, DELAY - 1000)
				if (DURATIONINDEX < 1) return false
				else animationStage9 = true
			}
			else if (!animationStage10) {
				scene.bindComponent(new GraphicalTextContainer(TX2, (CANVASSCENEW - 7 * TXS * TX2.length) / 2, (CANVASSCENEH - 7 * TXS) / 2, TXS, U, U, 1))
				RAF.endLaunched()
				Keyboard.ENTER(() => Display.I1(scene))
			}
			scene.render(true)
		})
	}
	
	static I1(scene) {
		Display.clear(scene)
		Stat.display(scene, 1, 0, 1)
		scene.render(true)
		after(3e3, () => Display.L11(scene))
	}

	static I2(scene) {}

	static L11(scene) {
		Display.clear(scene)
		const isQBC = componentIdentifier => /^(qbc)/i.test(componentIdentifier)
		const [playerBoxComponentIdentifier, delta, FLOORH] = ['player', 32, 64]
		const {NPCComponents, NCCComponents} = new L11Container()
		const playerBoxComponent = new PlayerBoxComponent(120, SCENEH - FLOORH - delta)

		scene.bindComponent({_components: NCCComponents})
		scene.bindComponent(playerBoxComponent, playerBoxComponentIdentifier)

		const NPCC = new NPCContainer(NPCComponents)
		scene.bindComponent(NPCC)
		scene.bindComponent(NPCC, NPCC.componentIdentifier)
		scene.bindComponentForAnimation(NPCC.componentIdentifier)

		const components = scene.getAllBindings()
		components.filter(component => isQBC(component.componentIdentifier)).forEach(component => scene.bindComponentForAnimation(component.componentIdentifier))
		
		Control.init()
		// add onload event
		Music.initLevelMusic(Music.overworld)
		Music.levelMusic.play()

		Stat.display(scene, 0, 1, 0)

		RAF.launch(passedTime => {
			Collision.UpdateLastPXPYWHMap(components)
			scene.animate(passedTime)
			playerBoxComponent.control(passedTime, components, scene, Control)
			scene.render(true)
			scene.fps()
		})
	}

	static L12(scene) {}
}

PlayerBoxComponent.I1 = NPC.I1 = Display.I1
PlayerBoxComponent.I2 = NPC.I2 = Display.I2

export default Display