
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
	
	const [DX, UPHEIGHT, UPHEIGHTADDITIONAL, UPDURATION, UPDURATIONADDITIONAL] = [5.5, 64, 100, 150, 100]
	
	let [SPACEPRESSED, DIRECTIONLEFT, DIRECTIONRIGHT, DIRECTIONUP] = []

	Keyboard.space(() => {
		DIRECTIONUP = SPACEPRESSED = true
	}, () => SPACEPRESSED = false)

	Keyboard.LR(code => {
		DIRECTIONLEFT = code == 37
		DIRECTIONRIGHT = code == 39
	}, () => DIRECTIONLEFT = DIRECTIONRIGHT = false)


	RAF.launch(passedTime => {

		let DIRECTION;

		if (DIRECTIONLEFT) DIRECTION = 1
		else if (DIRECTIONRIGHT) DIRECTION = 0
		else DIRECTION = false

		if (DIRECTIONLEFT) player.moveX(1, -DX, components, scene)
		else if (DIRECTIONRIGHT) player.moveX(0, DX, components, scene)
		else player.stand(player.direction)

		if (DIRECTIONUP) if (player.moveY(passedTime, UPHEIGHT, UPHEIGHTADDITIONAL, UPDURATION, UPDURATIONADDITIONAL, SPACEPRESSED, DIRECTION, components)) DIRECTIONUP = false

		scene.draw(true)
		scene.fps()
		// if (passedTime > 1 * 1e3) RAF.endLaunched()
	})

})
