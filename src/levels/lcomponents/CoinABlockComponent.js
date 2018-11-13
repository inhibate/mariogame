
import CanvasComponent from '../../canvasComponent'
import {SPRITESPATH} from '../../misc/'

export default class CoinABlockComponent extends CanvasComponent {
	constructor(posx = 0, posy = 0) {
		const [W, H, SPRITE] = [(28 - 20) * 12, (127 - 113) * 12, `${SPRITESPATH}/C.png`]
		//super(W, H, SPRITE, posx, posy, 'sprite', PALLETE[0][0], PALLETE[0][1], PALLETE[0][2], PALLETE[0][3])
		super(W, H, SPRITE, posx, posy, 'sprite', 20, 113, W / 12, H / 12)
	}
}