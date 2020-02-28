

import CanvasComponent from '../canvasComponent'
import {randomizeNumber} from '../misc/'
import NPCContainer from './container/NPCContainer'

export default class QuestionBoxComponent extends CanvasComponent {

	/* @pallete = 'OW' (USED IN OVERWORLD LEVELS) */
	/* @pallete = 'UG' (USED IN UNDERGROUND LEVELS) */
	/* @pallete = 'CASTLE' (USED IN CASTLE LEVELS) */
	/* @pallete = 'UW' (USED IN UNDERWATER LEVELS) */
	constructor(posx = 0, posy = 0, pallete = 'OW') {

		const [ANIMATE, HIT, AFTERHIT] = [0, 1, 2]

		const [W, H, SPRITE] = [32, 32, CanvasComponent.SPRITES.BLOCKS]

		const [DURATION, AMPLITUDE, MAXFRAMEINDEX, DELAY] = [150, H / 2, 8, 350]

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
		
		this.animationParameters = {DURATION, AMPLITUDE, MAXFRAMEINDEX, DELAY}
		this.states = {ANIMATE, HIT, AFTERHIT}
		this.state = this.states.ANIMATE
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

		else if (this.state == this.states.HIT) {

			const {DURATION, AMPLITUDE} = this.animationParameters
			
			if (!this.init) {
				this.NFRAMESPASSED = undefined
				this.frameIndex = this.animateIndex = this.sxsyswshIndex = 0
				this.specifySXSYSWSH()
				this.init = true
				this.initposy = this.posy
				this.inittime = time
				if (this.bonusComponent) { if (this.initBonusAfterAnimation == false) this.initBonus(scene) }
				else this.specifySXSYSWSH(this.sxsyswshIndex = 3)
			}

			let durationIndex = (time - this.inittime) / DURATION
			let ANIMATIONCOMPLETED = false
			if (durationIndex >= 1) ANIMATIONCOMPLETED = true
			
			if (ANIMATIONCOMPLETED) {
				this.posy = this.initposy
				this.init = this.inittime = this.initposy = undefined
				if (this.bonusAmount) if (this.initBonusAfterAnimation == true) this.initBonus(scene)
				if (this.bonusComponent && this.bonusIndex != this.bonusAmount) this.state = this.states.ANIMATE
				else {
					this.specifySXSYSWSH(this.sxsyswshIndex = 4)
					this.solid = true
					return true
				}
			}
			else this.posy = this.initposy - AMPLITUDE * Math.sin(Math.PI * durationIndex)
		}
	}

	hit(scene) {
		if (this.solid == true) return false
		this.state = this.states.HIT
		scene.bindComponentForAnimation(this.componentIdentifier)
	}

	unbindBonus() {
		delete this.bonusComponentIdentifier
		delete this.bonusIndex
		delete this.bonusAmount
		delete this.bonusComponent
		delete this.initBonusComponent
		delete this.initBonusAfterAnimation
	}
	
	initBonus(scene) {
		if (this.bonusIndex++ < this.bonusAmount) this.initBonusComponent(scene)
		if (this.bonusIndex == this.bonusAmount) {
			this.unbindBonus()
			this.specifySXSYSWSH(this.sxsyswshIndex = 3)
		}
	}

	bindBonus(bonusComponent, bonusAmount, initBonusAfterAnimation = false, extendsFromNPCClass = false) {
		
		this.bonusComponentIdentifier = bonusComponent.componentIdentifier || `bonus-${randomizeNumber()}`
		this.bonusIndex = 0
		this.bonusAmount = bonusAmount
		this.bonusComponent = bonusComponent
		this.initBonusAfterAnimation = initBonusAfterAnimation
		
		this.initBonusComponent = scene => {
			const [component, componentIdentifier] = [this.bonusComponent, this.bonusComponentIdentifier]
			component.init(this.posx, this.posy, this.width, this.height)
			if (extendsFromNPCClass) {
				scene.bindComponent(component, componentIdentifier)
				NPCContainer.instance().pushNPC(component)
			}
			else {
				if (scene.getBindedComponent(componentIdentifier) !== component) {
					scene.bindComponent(component, componentIdentifier)
					scene.bindComponentForAnimation(componentIdentifier)
				}
			}
			scene.zindex(componentIdentifier, this.componentIdentifier)
		}
		return this
	}
} 