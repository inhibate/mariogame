
import {CANVASSCENEW, CANVASSCENEH, SPRITESPATH, LEVELBGPATH, OTHERPATH} from './misc'
import CanvasScene from './canvasScene'
import CanvasComponent from './canvasComponent'

import Display from './display'
import {SFX, Music} from './sound'

const [ES, C, BLOCKS, CHARACTERS, PSTF, GF, L11, L11B1] = [
	`${OTHERPATH}/ES.png`,
	`${SPRITESPATH}/C.png`,
	`${SPRITESPATH}/BLOCKS.png`,
	`${SPRITESPATH}/CHARACTERS.png`,
	`${SPRITESPATH}/PSTF.gif`,
	`${SPRITESPATH}/GF.png`,
	`${LEVELBGPATH}/11/L11.png`,
	`${LEVELBGPATH}/11/L11B1.png`
]

// & init CanvasComponent.SPRITES
const scene = new CanvasScene(CanvasComponent, CANVASSCENEW, CANVASSCENEH, {ES, C, BLOCKS, CHARACTERS, PSTF, GF, L11, L11B1})

// Music loading algorithm: Load in I0-stage then display I4 when complete
scene.init(scene => /*Display.I1(scene)*/ Display.L11(scene))