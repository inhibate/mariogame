
import {CANVASSCENEW, CANVASSCENEH, SCENEH, SPRITESPATH, LEVELBGPATH} from './misc'
import CanvasScene from './canvasScene'
import CanvasComponent from './canvasComponent'
import L11DataComponent from './levels/ldcomponents/L11DataComponent'
import RAF from './raf'
import Control from './control'
import Collision from './collision'

import GoombaNPC from './levels/npc/GoombaNPC'
import NPCContainer from './levels/npc/NPCContainer'

const [C, BLOCKS, CHARACTERS, PSTF, GF, LEVEL11] = [`${SPRITESPATH}/C.png`, `${SPRITESPATH}/BLOCKS.png`, `${SPRITESPATH}/CHARACTERS.png`, `${SPRITESPATH}/PSTF.gif`, `${SPRITESPATH}/GF.png`, `${LEVELBGPATH}/1-1.png`]

//CanvasComponent.SPRITES
const scene = new CanvasScene(CanvasComponent, CANVASSCENEW, CANVASSCENEH, {C, BLOCKS, CHARACTERS, PSTF, GF, LEVEL11})

scene.init(() => {
	
	scene.bindComponent(new L11DataComponent())

	const [components, player] = [scene.getAllBindings(), scene.getBindedComponent('player')]
	const isQBC = componentIdentifier => /^(qbc)/i.test(componentIdentifier)
	
	const NPCC = new NPCContainer({ 
		'npc-goombanpc1': new GoombaNPC(120 + 32 * 8, SCENEH - 50 - 32 - 256, 2),
		'npc-goombanpc2': new GoombaNPC(120 + 32 * 9, SCENEH - 50 - 32 - 256, 1),
		'npc-goombanpc3': new GoombaNPC(120 + 32 * 10, SCENEH - 50 - 32 - 256, 1)
	})
	scene.bindComponent(NPCC)
	scene.bindComponent(NPCC, NPCC.componentIdentifier)
	scene.bindComponentForAnimation(NPCC.componentIdentifier)

	components.filter(component => isQBC(component.componentIdentifier)).forEach(component => scene.bindComponentForAnimation(component.componentIdentifier))
	
	RAF.launch(passedTime => {
		Collision.UpdateLastPXPYWHMap(components)
		scene.render(true)
		scene.fps()
		scene.animate(passedTime)
		player.control(passedTime, components, scene, Control)
	})

})