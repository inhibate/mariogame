
import CanvasScene from './canvasScene'
import CanvasComponent from './canvasComponent'

import LevelData11Component from './levels/ldcomponents/LevelData11Component'

import {CANVASSCENEW, CANVASSCENEH} from './misc'

import RAF from './raf'
import Keyboard from './keyboard'

const scene = new CanvasScene(CANVASSCENEW, CANVASSCENEH)

//scene.bindComponent(new CanvasComponent(6784, 448, '../textures/level-1-1.png', 0, 0, 'image'), 'component1')
//scene.bindComponent(new CanvasComponent(50, 50, 'blue', 100, 240), 'component2')

scene.bindComponent(new LevelData11Component())


scene.componentsReady(() => {
	
	const [components, player] = [scene.getAllBindings(), scene.getBindedComponent('player')]
	let [SPACEPRESSED, DIRECTIONLEFT, DIRECTIONRIGHT, DIRECTIONUPDOWN, DIRECTIONDOWN] = []

	const control = {SPACEPRESSED, DIRECTIONLEFT, DIRECTIONRIGHT, DIRECTIONUPDOWN, DIRECTIONDOWN}
	
	Keyboard.space(() => {
		control.DIRECTIONUPDOWN = true
		control.SPACEPRESSED = true
	}, () => control.SPACEPRESSED = false)

	Keyboard.LR(code => {
		control.DIRECTIONLEFT = code == 37
		control.DIRECTIONRIGHT = code == 39
	}, () => control.DIRECTIONLEFT = control.DIRECTIONRIGHT = false)


	RAF.launch(passedTime => {

		if (control.DIRECTIONLEFT) {
			player.moveX(passedTime, 1, components, scene, control)
		}
		else if (control.DIRECTIONRIGHT) { 
			player.moveX(passedTime, 0, components, scene, control)
		}
		else player.stand(player.direction)

		if (control.DIRECTIONDOWN) {
			if (player.moveY(passedTime, control, components, false)) control.DIRECTIONDOWN = control.DIRECTIONUPDOWN = false
		}
		else if (control.DIRECTIONUPDOWN) {
			if (player.moveY(passedTime, control, components, true)) control.DIRECTIONUPDOWN = false
		}
 

		scene.render(true)
		scene.fps()
		// if (passedTime > 1 * 1e3) RAF.endLaunched()
	})

})
