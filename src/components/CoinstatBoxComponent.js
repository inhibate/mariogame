
import CanvasComponent from '../canvasComponent'

export default class CoinstatBoxComponent extends CanvasComponent {
	
	constructor(posx, posy, unmovable, collidable) {
		
		const [W, H, SPRITE] = [5 * 2, 8 * 2, CanvasComponent.SPRITES.C]

		const [MAXFRAMEINDEX, DELAY] = [8, 350]

		const sprites = [[1, 160, 5, 8], [9, 160, 5, 8], [17, 160, 5, 8]]
		
		super(W, H, SPRITE, posx, posy, 'sprite', sprites[0][0], sprites[0][1], sprites[0][2], sprites[0][3])
		this.animationParameters = {MAXFRAMEINDEX, DELAY}
		this.sprites = sprites
		this.sxsyswshIndex = this.animateIndex = this.frameIndex = 0;
		[this.unmovable, this.collidable] = [unmovable, collidable]
	}
	
	specifySXSYSWSH() {
		const [SX, SY, SW, SH] = [0, 1, 2, 3]
		this.sx = this.sprites[this.sxsyswshIndex][SX]
		this.sy = this.sprites[this.sxsyswshIndex][SY]
		this.sw = this.sprites[this.sxsyswshIndex][SW]
		this.sh = this.sprites[this.sxsyswshIndex][SH]
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