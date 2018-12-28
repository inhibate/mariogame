
import CanvasComponent from '../canvasComponent'

export default class TriangleBoxComponent extends CanvasComponent {

	constructor(posx = 0, posy = 0) {
		const [W, H, SPRITE, SX, SY, SW, SH] = [32, 32, CanvasComponent.SPRITES.PSTF, 124, 746, 16, 16]
		// super(W, H, SPRITE, posx, posy, 'sprite', SX, SY, SW, SH)
		super(W, H, 'transparent', posx, posy, 'rect')
	}

} 