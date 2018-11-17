
import CanvasComponent from '../../canvasComponent'

export default class CoinABlockComponent extends CanvasComponent {
	constructor(pposx, pposy, pw, ph) {

		const [SW, SH] = [8, 14]
		const [W, H, SPRITE] = [SW * 2, SH * 2, CanvasComponent.SPRITES.C]
		
		const SPRITES = [[4, 113, SW, SH], [52.5, 113, SW, SH], [36, 113, SW, SH], [20, 113, SW, SH]]
		const OVERPLATFORMGAP = 16
		const [DURATION, AMPLITUDE, MAXFRAMEINDEX] = [550, 32 * 2, 3]

		super(W, H, SPRITE, undefined, undefined, 'sprite', SPRITES[0][0], SPRITES[0][1], SPRITES[0][2], SPRITES[0][3])

		this.animationParameters = {DURATION, AMPLITUDE, MAXFRAMEINDEX}
		this.SPRITES = SPRITES
		this.OVERPLATFORMGAP = OVERPLATFORMGAP
		this.default(pposx, pposy, pw, ph)
	}

	default(pposx, pposy, pw, ph) {
		this.posy = pposy - this.height - this.OVERPLATFORMGAP
		this.posx = (pposx + pw / 2) - this.width / 2
		this.sxsyswshIndex = this.frameIndex = 0
		this.inittime = this.initposy = this.animationInitialized = undefined
	}

	specifySXSYSWSH() {
		const [SX, SY, SW, SH] = [0, 1, 2, 3]
		this.sx = this.SPRITES[this.sxsyswshIndex][SX]
		this.sy = this.SPRITES[this.sxsyswshIndex][SY]
		this.sw = this.SPRITES[this.sxsyswshIndex][SW]
		this.sh = this.SPRITES[this.sxsyswshIndex][SH]
	}

	animate(time, scene) {

		if (!this.animationInitialized) {
			this.inittime = time
			this.initposy = this.posy
			this.animationInitialized = true
		}

		const {DURATION, AMPLITUDE} = this.animationParameters
		let ANIMATIONCOMPLETED = false
		let durationIndex = (time - this.inittime) / DURATION
		
		if (durationIndex >= 1) ANIMATIONCOMPLETED = true
		
		if ((++this.frameIndex % this.animationParameters.MAXFRAMEINDEX) == 0) {
			this.specifySXSYSWSH()
			this.frameIndex = 0
			this.sxsyswshIndex = (this.sxsyswshIndex + 1) % this.SPRITES.length
		}

		if (ANIMATIONCOMPLETED) {
			scene.unbindComponent(this.componentIdentifier)
			return true
		}
		else this.posy = this.initposy - AMPLITUDE * Math.sin(Math.PI * durationIndex)
	}

}