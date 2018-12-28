
import CanvasComponent from '../../canvasComponent'
import GraphicalTextContainer from '../container/GraphicalTextContainer'

import {SFX, Music} from '../../sound'
import Stat from '../../stat'

export default class CoinBonusComponent extends CanvasComponent {
	constructor() {

		const [SW, SH] = [8, 14]
		const [W, H, SPRITE, U] = [SW * 2, SH * 2, CanvasComponent.SPRITES.C]
		const [DURATION, AMPLITUDE, MAXFRAMEINDEX] = [550, 32 * 2, 4]
		const SPRITES = [[4, 113, SW, SH], [52.5, 113, SW, SH], [36, 113, SW, SH], [20, 113, SW, SH]]
		const OVERPLATFORMGAP = 16
		
		super(W, H, SPRITE, U, U, 'sprite', SPRITES[0][0], SPRITES[0][1], SPRITES[0][2], SPRITES[0][3])
		
		this.animationParameters = {DURATION, AMPLITUDE, MAXFRAMEINDEX}
		this.SPRITES = SPRITES
		this.OVERPLATFORMGAP = OVERPLATFORMGAP

		this.collidable = false
	}

	init(pposx, pposy, pw, ph) {
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
			SFX.coin.play()
			Stat.score(scene, 200)
			Stat.coins(scene, 1)
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
		
		this.posy = this.initposy - AMPLITUDE * Math.sin(Math.PI * durationIndex)

		if (ANIMATIONCOMPLETED) {
			const GTC = new GraphicalTextContainer('200', this.posx + this.width / 2, this.posy + this.height / 2, 1.4)
			scene.bindComponentForAnimation(GTC.componentIdentifier)
			scene.bindComponent(GTC)
			scene.bindComponent(GTC, GTC.componentIdentifier)
			scene.unbindComponent(this.componentIdentifier)
			return true
		}
	}

}