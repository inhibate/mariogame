

import CanvasComponent from '../canvasComponent'


export default class CoinBoxComponent extends CanvasComponent {

	/* @pallete = 'OW' (USED IN OVERWORLD LEVELS) */
	/* @pallete = 'UG' (USED IN UNDERGROUND LEVELS) */
	/* @pallete = 'CASTLE' (USED IN CASTLE LEVELS) */
	/* @pallete = 'UW' (USED IN UNDERWATER LEVELS) */
	constructor(posx = 0, posy = 0, pallete = 'OW') {

		const [W, H, SPRITE] = [20, 28, CanvasComponent.SPRITES.C]

		const [MAXFRAMEINDEX, DELAY] = [8, 350]

		const [OW, UG, CASTLE, UW] = ['OW', 'UG', 'CASTLE', 'UW']

		const OWPALLETE = [[3, 98, 10, 14], [19, 98, 10, 14], [35, 98, 10, 14]]

		const UGPALLETE = [[147, 98, 10, 14], [163, 98, 10, 14], [179, 98, 10, 14]]

		const CASTLEPALLETE = [[291, 98, 10, 14], [307, 98, 10, 14], [323, 98, 10, 14]]

		const UWPALLETE = [[435, 98, 10, 14], [451, 98, 10, 14], [467, 98, 10, 14]]

		let PALLETE;

		if (pallete == OW) PALLETE = OWPALLETE
		else if (pallete == UG) PALLETE = UGPALLETE
		else if (pallete == CASTLE) PALLETE = CASTLEPALLETE 
		else if (pallete == UW) PALLETE = UWPALLETE
		
		super(W, H, SPRITE, posx, posy, 'sprite', PALLETE[0][0], PALLETE[0][1], PALLETE[0][2], PALLETE[0][3])
		
		this.animationParameters = {MAXFRAMEINDEX, DELAY}
		this.pallete = PALLETE
		this.sxsyswshIndex = this.animateIndex = this.frameIndex = 0
	}

	specifySXSYSWSH() {
		const [SX, SY, SW, SH] = [0, 1, 2, 3]
		this.sx = this.pallete[this.sxsyswshIndex][SX]
		this.sy = this.pallete[this.sxsyswshIndex][SY]
		this.sw = this.pallete[this.sxsyswshIndex][SW]
		this.sh = this.pallete[this.sxsyswshIndex][SH]
	}

	animate(time, scene) {
		const NFRAMESPASSED = this.NFRAMESPASSED || (++this.frameIndex % this.animationParameters.MAXFRAMEINDEX) == 0
		if (NFRAMESPASSED) {
			
			this.specifySXSYSWSH()
			
			if (this.sxsyswshIndex == 0) {
				if (!this.NFRAMESPASSED) this.NFRAMESPASSED = true
				if (!this.inittime) this.inittime = time
				if (time - this.inittime <= this.animationParameters.DELAY) return false
				else this.NFRAMESPASSED = this.inittime = undefined
			}

			this.frameIndex = 0
			this.sxsyswshIndex = [1, 2, 1, 0][this.animateIndex]
			
			if (this.animateIndex == 3) this.animateIndex = 0
			else this.animateIndex++
		}
	}
}