
import CanvasComponent from '../canvasComponent'

export default class BrickBoxComponent extends CanvasComponent {

	constructor(posx = 0, posy = 0) {

		const [W, H, SPRITE, SX, SY, SW, SH] = [32, 32, CanvasComponent.SPRITES.BLOCKS, 80 + (96 - 80) * 12, 112 + (128 - 112) * 5, 96 - 80, 128 - 112]
		const [DURATION, AMPLITUDE] = [150, H / 2]
		
		super(W, H, SPRITE, posx, posy, 'sprite', SX, SY, SW, SH)

		this.animationParameters = {DURATION, AMPLITUDE}
	}

	animate(time, scene) {
		
		if (!this.animationInitialized) {
			this.animationInitialized = true
			this.inittime = time
			this.initposy = this.posy
		}

		const {DURATION, AMPLITUDE} = this.animationParameters
		let ANIMATIONCOMPLETED = false
		let durationIndex = (time - this.inittime) / DURATION
		
		if (durationIndex >= 1) ANIMATIONCOMPLETED = true
		
		if (ANIMATIONCOMPLETED) {
			this.posy = this.initposy
			this.animationInitialized = this.inittime = this.initposy = undefined
			return true
		}
		else this.posy = this.initposy - AMPLITUDE * Math.sin(Math.PI * durationIndex)
	}

	hit(scene) { scene.bindComponentForAnimation(this.componentIdentifier) }

} 