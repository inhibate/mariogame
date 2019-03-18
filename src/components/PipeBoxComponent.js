
import CanvasComponent from '../canvasComponent'
import {abs} from '../misc/'

export default class PipeBoxComponent extends CanvasComponent {

	/* @type = [1, 1] SMALL/GREEN */
	/* @type = [2, 1] MIDDLE/GREEN */
	/* @type = [3, 1] LARGE/GREEN */
	/* @type = [4, 1] LARGE2/GREEN */
	/* @type = [5, 1] VERYLARGE2/GREEN */
	/* @type = [1, 2] SMALL/GREY */
	/* @type = [2, 2] MIDDLE/GREY */
	/* @type = [3, 2] LARGE/GREY */
	/* @type = [4, 2] LARGE2/GREY */
	/* @type = [5, 2] VERYLARGE2/GREY */
	/* @out = ['LXX', 'pbcXX' | 'BX'] */
	constructor(posx = 0, posy = 0, type = [1, 1], penetrationAllowed = false, out = []) {

		let [W, H, SX, SY, SW, SH] = []

		const initWHSXSYSWSH = (_SX, _SY, SX1, SY1) => {
			const [_SW, _SH] = [abs(_SX - SX1), abs(_SY - SY1)]
			SX = _SX
			SY = _SY
			SW = _SW
			SH = _SH
			W = _SW * 2
			H = _SH * 2
		}

		if (type[1] == 1) {
			if (type[0] == 1) {
				initWHSXSYSWSH(309, 417, 341, 450)
			}
			else if (type[0] == 2) {
				initWHSXSYSWSH(271, 401, 303, 450)
			}
			else if (type[0] == 3) {
				initWHSXSYSWSH(230, 385, 262, 450)
			}
			else if (type[0] == 4) {
				initWHSXSYSWSH(156, 417, 218, 449)
			}
			else if (type[0] == 5) {
				initWHSXSYSWSH(84, 417, 146, 449)
			}
		}

		super(W, H, CanvasComponent.SPRITES.PSTF, posx, posy, 'sprite', SX, SY, SW, SH)

		this.penetrationAllowed = penetrationAllowed
		this.out = out
	}

} 