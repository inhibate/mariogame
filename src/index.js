
import {CANVASSCENEW, CANVASSCENEH, SPRITESPATH, LEVELBGPATH} from './misc'
import CanvasScene from './canvasScene'
import CanvasComponent from './canvasComponent'
import LevelData11Component from './levels/ldcomponents/LevelData11Component'
import RAF from './raf'
import Control from './control'

const [C, BLOCKS, CHARACTERS, PSTF, LEVEL11] = [`${SPRITESPATH}/C.png`, `${SPRITESPATH}/BLOCKS.png`, `${SPRITESPATH}/CHARACTERS.png`, `${SPRITESPATH}/PSTF.gif`, `${LEVELBGPATH}/1-1.png`]

//CanvasComponent.SPRITES
const scene = new CanvasScene(CanvasComponent, CANVASSCENEW, CANVASSCENEH, {C, BLOCKS, CHARACTERS, PSTF, LEVEL11})

scene.init(() => {
	
	scene.bindComponent(new LevelData11Component())

	const [components, player] = [scene.getAllBindings(), scene.getBindedComponent('player')]
	const isQBC = componentIdentifier => /^(qbc)/i.test(componentIdentifier)

	components.filter(component => isQBC(component.componentIdentifier)).forEach(component => scene.bindComponentForAnimation(component.componentIdentifier))

	RAF.launch(passedTime => {

		scene.animate(passedTime)

		player.control(passedTime, components, scene, Control)
		
		scene.render(true)
		scene.fps()
	})

})