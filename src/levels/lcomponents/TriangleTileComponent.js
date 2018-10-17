
import CanvasComponent from '../../canvasComponent'
import {SPRITESPATH} from '../../misc/'

export default class TriangleTileComponent extends CanvasComponent {

	constructor(posx = 0, posy = 0) {
		const [W, H, SPRITE, SX, SY, SW, SH] = [32, 32, `${SPRITESPATH}/PSTF.gif`, 124, 746, 16, 16]
		super(W, H, SPRITE, posx, posy, 'sprite', SX, SY, SW, SH)
	} 

} 