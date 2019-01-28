
import {CANVASSCENEW, CANVASSCENEH, EMPTYCHAR, after} from '../misc'
import RAF from '../raf'
import Keyboard from '../keyboard'
import Control from '../control'
import Collision from '../collision'

import CanvasComponent from '../canvasComponent'
import PlayerBoxComponent from '../components/PlayerBoxComponent'

import GraphicalTextContainer from '../components/container/GraphicalTextContainer'
import L11Container from '../components/container/L11Container'
import NPCContainer from '../components/container/NPCContainer'

import Stat from '../stat'

import {SFX, Music} from '../sound'

const [BGIdentifier, playerBoxComponentIdentifier] = ['bg', 'player']

class Display {

	static clear(scene) {
		RAF.endLaunched()
		Collision.deleteLastPXPYWHMap()
		Control.clear()
		const components = scene.getAllBindings()
		const componentsForAnimation = scene.getBindedComponentsForAnimation()
		components.map(component => component.componentIdentifier).forEach(componentIdentifier => scene.unbindComponent(componentIdentifier))
		while (0 < componentsForAnimation.length) scene.unbindComponentForAnimation(componentsForAnimation[0])
	}
	
	static I0(scene) {

		const [TX1, TXS, ESImageIdentifier] = ['\u00A9 2018 PROGRAMMED BY NEUMANN IVAN', 1.75, 'es']
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
				RAF.endLaunched()
				Display.I4(scene)
			}
			scene.render(true)
		})
	}
	
	static I1(scene) {
		const world = world => after(3e3, () => this[world](scene))
		this.clear(scene)
		
		Stat.display(scene, 1, 0, 1)
		scene.render(true)
		
		switch (Stat.currentWorld) {
			case 11: world('L11'); break
			case 12: world('L12'); break
			case 13: world('L13'); break
			case 14: world('L14'); break
			case 21: world('L21'); break
			case 22: world('L22'); break
			case 23: world('L23'); break
			case 24: world('L24'); break
			case 31: world('L31'); break
			case 32: world('L32'); break
			case 33: world('L33'); break
			case 34: world('L34'); break
			case 41: world('L41'); break
			case 42: world('L42'); break
			case 43: world('L43'); break
			case 44: world('L44'); break
			case 51: world('L51'); break
			case 52: world('L52'); break
			case 53: world('L53'); break
			case 54: world('L54'); break
			case 61: world('L61'); break
			case 62: world('L62'); break
			case 63: world('L63'); break
			case 64: world('L64'); break
			case 71: world('L71'); break
			case 72: world('L72'); break
			case 73: world('L73'); break
			case 74: world('L74'); break
			case 81: world('L81'); break
			case 82: world('L82'); break
			case 83: world('L83'); break
			case 84: world('L84'); break
		}
	}

	static I2(scene) {
		const [TX1, TXS, DELAY] = ['TIME UP', 2, 3e3]
		this.clear(scene)
		Stat.display(scene, 1, 0, 0)
		scene.bindComponent(new GraphicalTextContainer(TX1, (CANVASSCENEW - 7 * TXS * TX1.length) / 2, (CANVASSCENEH - 7 * TXS) / 2, TXS))
		scene.render(true)
		after(DELAY, () => this.I3(scene))
	}

	static I3(scene) {
		const [TX1, TXS, DELAY] = ['GAME OVER', 2, 10e3]
		this.clear(scene)
		Stat.display(scene, 1, 0, 0)
		scene.bindComponent(new GraphicalTextContainer(TX1, (CANVASSCENEW - 7 * TXS * TX1.length) / 2, (CANVASSCENEH - 7 * TXS) / 2, TXS))
		scene.render(true)
		after(DELAY, () => this.I4(scene, true))
	}

	static I4(scene, tryAgainText = false) {
		const [TX1, TXS] = [`PRESS ENTER TO ${ tryAgainText ? 'TRY AGAIN' : 'START' }`, 1.75]
		this.clear(scene)
		Stat.default()
		scene.bindComponent(new CanvasComponent(CANVASSCENEW, CANVASSCENEH, '#000', 0, 0), BGIdentifier)
		scene.bindComponent(new GraphicalTextContainer(TX1, (CANVASSCENEW - 7 * TXS * TX1.length) / 2, (CANVASSCENEH - 7 * TXS) / 2, TXS))
		scene.render(true)
		Keyboard.ENTER(() => this.I1(scene))
	}

	static I5(scene, locationLoadingData) {
		const [DELAY] = [550]
		this.clear(scene)
		scene.bindComponent(new CanvasComponent(CANVASSCENEW, CANVASSCENEH, '#000', 0, 0), BGIdentifier)
		scene.render(true)
		after(DELAY, () => {
			if (/^B/i.test(locationLoadingData[1])) {
				const bonusLevelMethod = `${locationLoadingData[0]}${locationLoadingData[1]}`
				this[bonusLevelMethod](scene)
			}
			else if (/^pbc/i.test(locationLoadingData[1])) {
				this[locationLoadingData[0]](scene, locationLoadingData[1])
			}
		})
	}

	static L11(scene, componentIdentifier) {
		this.clear(scene)
		const isQBC = componentIdentifier => /^(qbc)/i.test(componentIdentifier)
		const [delta, FLOORH] = [32, 64]
		const {NPCComponents, NCCComponents} = new L11Container()
		let playerBoxComponent;

		scene.bindComponent({_components: NCCComponents})

		const NPCC = new NPCContainer(NPCComponents)
		scene.bindComponent(NPCC)
		scene.bindComponent(NPCC, NPCC.componentIdentifier)
		scene.bindComponentForAnimation(NPCC.componentIdentifier)

		const components = scene.getAllBindings()
		components.filter(component => isQBC(component.componentIdentifier)).forEach(component => scene.bindComponentForAnimation(component.componentIdentifier))
		
		if (componentIdentifier) {
			const [pipe, additionalDx] = [scene.getBindedComponent(componentIdentifier), 100]
			const dx = -pipe.posx + additionalDx
			scene.move(dx)
			Stat.display(scene, 0, 0, 0)
			scene.bindComponent(playerBoxComponent = new PlayerBoxComponent(0, 0), playerBoxComponentIdentifier)
			playerBoxComponent.moveFromPipe(scene, pipe, () => {
				Control.init()
				Stat.time(scene, Stat.currentTime, true)
			})
		}
		else {
			playerBoxComponent = new PlayerBoxComponent(120, CANVASSCENEH - FLOORH - delta)
			scene.bindComponent(playerBoxComponent, playerBoxComponentIdentifier)
			Control.init()
			Stat.display(scene, 0, 1, 0)
		}

		Music.initBackgroundMusic('overworld')
		if (Stat.currentTime > 100) Music.playBackgroundMusic()
		else Music.playBackgroundMusicAccelerated()

		RAF.launch(passedTime => {
			Collision.updateLastPXPYWHMap(components)
			scene.animate(passedTime)
			playerBoxComponent.control(passedTime, components, scene, Control)
			scene.render(true)
			scene.fps()
		})
	}

	static L12(scene) {}

	static L11B1(scene) {
		this.clear(scene)
		const isQBC = componentIdentifier => /^(qbc)/i.test(componentIdentifier)
		const isCBC = componentIdentifier => /^(cbc)/i.test(componentIdentifier)
		const [delta, FLOORH] = [32, 64]
		const playerBoxComponent = new PlayerBoxComponent(delta * 2, delta * 2)
		const {B1Components} = new L11Container()

		scene.bindComponent({_components: B1Components})
		scene.bindComponent(playerBoxComponent, playerBoxComponentIdentifier)
		const components = scene.getAllBindings()
		components.filter(component => isQBC(component.componentIdentifier) || isCBC(component.componentIdentifier)).forEach(component => scene.bindComponentForAnimation(component.componentIdentifier))

		Control.init()

		Music.initBackgroundMusic('underground')
		if (Stat.currentTime > 100) Music.playBackgroundMusic()
		else Music.playBackgroundMusicAccelerated()
		
		Stat.display(scene, 0, 1, 0)
		Control.DIRECTIONDOWN = true
		
		RAF.launch(passedTime => {
			Collision.updateLastPXPYWHMap(components)
			scene.animate(passedTime)
			playerBoxComponent.control(passedTime, components, scene, Control)
			scene.render(true)
			scene.fps('#fff')
		})
	}
}

export default Display