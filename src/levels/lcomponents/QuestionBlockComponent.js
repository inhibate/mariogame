
import CanvasComponent from '../../canvasComponent'
import {SPRITESPATH} from '../../misc/'

export default class QuestionBlockComponent extends CanvasComponent {

	constructor(posx = 0, posy = 0) {
		const [W, H, SPRITE, SX, SY, SW, SH] = [32, 32, `${SPRITESPATH}/BLOCKS.png`, 80, 112, 96 - 80, 128 - 112]	
		super(W, H, SPRITE, posx, posy, 'sprite', SX, SY, SW, SH)
	} 

} 