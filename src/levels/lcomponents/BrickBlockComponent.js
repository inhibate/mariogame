
import CanvasComponent from '../../canvasComponent'
import {SPRITESPATH} from '../../misc/'

export default class BrickBlockComponent extends CanvasComponent {

	constructor(posx = 0, posy = 0) {
		const [W, H, SPRITE, SX, SY, SW, SH] = [32, 32, `${SPRITESPATH}/BLOCKS.png`, 80 + (96 - 80) * 12, 112 + (128 - 112) * 5, 96 - 80, 128 - 112]	
		super(W, H, SPRITE, posx, posy, 'sprite', SX, SY, SW, SH)
	} 

} 