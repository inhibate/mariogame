
import CanvasComponent from '../canvasComponent'

export default class TransparentBoxComponent extends CanvasComponent {
	constructor(posx, posy, W, H) { super(W, H, 'transparent', posx, posy, 'rect') }
} 