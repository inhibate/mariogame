
import CanvasComponent from '../../canvasComponent'
import {SPRITESPATH} from '../../misc/'

export default class QuestionBlockComponent extends CanvasComponent {

	/* @pallete = 'OW' (USED IN OVERWORLD LEVELS) */
	/* @pallete = 'UG' (USED IN UNDERGROUND LEVELS) */
	/* @pallete = 'CASTLE' (USED IN CASTLE LEVELS) */
	/* @pallete = 'UW' (USED IN UNDERWATER LEVELS) */
	constructor(posx = 0, posy = 0, pallete = 'OW') {

		const [ANIMATE, HIT, AFTERHIT] = [0, 1, 2]

		const [W, H, SPRITE] = [32, 32, `${SPRITESPATH}/BLOCKS.png`]

		const [DURATION, AMPLITUDE, MAXFRAMEINDEX, DELAY] = [150, H / 2, 8, 300]

		const [OW, UG, CASTLE, UW] = ['OW', 'UG', 'CASTLE', 'UW']

		const OWPALLETE = [
			[80 + 16 * 0, 112 + 16 * 0, 16, 16],
			[80 + 16 * 1, 112 + 16 * 0, 16, 16],
			[80 + 16 * 2, 112 + 16 * 0, 16, 16],
			[80 + 16 * 3, 112 + 16 * 0, 16, 16], /* HIT */
			[80 + 16 * 4, 112 + 16 * 0, 16, 16]  /* AFTER HIT */
		]

		const UGPALLETE = [
			[80 + 16 * 0, 112 + 16 * 1, 16, 16],
			[80 + 16 * 1, 112 + 16 * 1, 16, 16],
			[80 + 16 * 2, 112 + 16 * 1, 16, 16],
			[80 + 16 * 3, 112 + 16 * 1, 16, 16], /* HIT */
			[80 + 16 * 4, 112 + 16 * 1, 16, 16]  /* AFTER HIT */
		]

		const CASTLEPALLETE = [
			[80 + 16 * 0, 112 + 16 * 2, 16, 16],
			[80 + 16 * 1, 112 + 16 * 2, 16, 16],
			[80 + 16 * 2, 112 + 16 * 2, 16, 16],
			[80 + 16 * 3, 112 + 16 * 2, 16, 16], /* HIT */
			[80 + 16 * 4, 112 + 16 * 2, 16, 16]  /* AFTER HIT */
		]

		const UWPALLETE = [
			[80 + 16 * 0, 112 + 16 * 3, 16, 16],
			[80 + 16 * 1, 112 + 16 * 3, 16, 16],
			[80 + 16 * 2, 112 + 16 * 3, 16, 16],
			[80 + 16 * 3, 112 + 16 * 3, 16, 16], /* HIT */
			[80 + 16 * 4, 112 + 16 * 3, 16, 16]  /* AFTER HIT */
		]

		let PALLETE;

		if (pallete == OW) PALLETE = OWPALLETE
		else if (pallete == UG) PALLETE = UGPALLETE
		else if (pallete == CASTLE) PALLETE = CASTLEPALLETE
		else if (pallete == UW) PALLETE = UWPALLETE
		
		super(W, H, SPRITE, posx, posy, 'sprite', PALLETE[0][0], PALLETE[0][1], PALLETE[0][2], PALLETE[0][3])
		
		this.states = {ANIMATE, HIT, AFTERHIT}
		this.state = this.states.ANIMATE

		this.animationParameters = {DURATION, AMPLITUDE, MAXFRAMEINDEX, DELAY}
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

	animate(time) {
		if (this.state == this.states.ANIMATE) {
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

	hit(time) {
		
		if (!this.init) {
			this.state = this.states.HIT
			this.specifySXSYSWSH(this.sxsyswshIndex = 3)
			this.inittime = time
			this.initposy = this.posy
			this.init = true
			delete this.NFRAMESPASSED
		}

		const {DURATION, AMPLITUDE} = this.animationParameters
		let ANIMATIONCOMPLETED = false
		let durationIndex = (time - this.inittime) / DURATION
		
		if (durationIndex >= 1) ANIMATIONCOMPLETED = true
		
		if (ANIMATIONCOMPLETED) {
			this.posy = this.initposy
			this.init = this.inittime = this.initposy = undefined
			return true
		}
		else {
			this.posy = this.initposy - AMPLITUDE * Math.sin(Math.PI * durationIndex)
			return false
		}
	}

} 