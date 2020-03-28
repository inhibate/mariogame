
import {CANVASSCENEW, CANVASSCENEH, SPRITESPATH, LEVELBGPATH, OTHERPATH} from './misc'
import CanvasScene from './canvasScene'
import CanvasComponent from './canvasComponent'

import Display from './display'
import {SFX, Music} from './sound'

const [ACASTLE, BCASTLE, ES, C, BLOCKS, CHARACTERS, PSTF, GF, L11, L11B1, L12, L12B1, L12B2, TRANSITION] = [
	`${SPRITESPATH}/ACASTLE.png`,
	`${SPRITESPATH}/BCASTLE.png`,
	`${OTHERPATH}/ES.png`,
	`${SPRITESPATH}/C.png`,
	`${SPRITESPATH}/BLOCKS.png`,
	`${SPRITESPATH}/CHARACTERS.png`,
	`${SPRITESPATH}/PSTF.gif`,
	`${SPRITESPATH}/GF.png`,
	`${LEVELBGPATH}/11/L11.png`,
	`${LEVELBGPATH}/11/L11B1.png`,
	`${LEVELBGPATH}/12/L12.png`,
	`${LEVELBGPATH}/12/L12B1.png`,
	`${LEVELBGPATH}/12/L12B2.png`,
	`${LEVELBGPATH}/transition.png`
]

// & init CanvasComponent.SPRITES
const scene = new CanvasScene(CanvasComponent, CANVASSCENEW, CANVASSCENEH, {ACASTLE, BCASTLE, ES, C, BLOCKS, CHARACTERS, PSTF, GF, L11, L11B1, L12, L12B1, L12B2, TRANSITION})

// Music loading algorithm: Load in I0-stage then display I4 when complete
scene.init(scene => /*Display.I1(scene)*/ { Display.L11(scene); /*scene.move(-4900)*/ })