
import CanvasComponent from '../canvasComponent'
import NPCContainer from './container/NPCContainer'

import {BTYPE} from '../collision'

export default class InvisibleBoxComponent extends CanvasComponent {
    
    constructor(posx, posy) {
		const [SX, SY, SW, SH, W, H, SPRITE] = [80 + 16 * 4, 112 + 16 * 0, 16, 16, 32, 32, CanvasComponent.SPRITES.BLOCKS]
		const [DURATION, AMPLITUDE] = [150, H / 2]
        super(W, H, SPRITE, posx, posy, 'sprite', SX, SY, SW, SH, 0)
        this.states = { HIT: 0 }
        this.solid = false
        this.animationParameters = { DURATION, AMPLITUDE }
        this.collidable = [BTYPE]
    }

    makeVisible() { this.alpha = 1 }

	hit(scene) {
        if (this.solid == true) return false
        this.solid = true
        this.state = this.states.HIT
        this.makeVisible()
		scene.bindComponentForAnimation(this.componentIdentifier)
	}

    animate(time, scene) {
        if (this.state == this.states.HIT) {
            const {DURATION, AMPLITUDE} = this.animationParameters
            if (!this.animationInitialized) {
				this.animationInitialized = true
				this.initposy = this.posy
				this.inittime = time
				if (this.bonusComponent) { if (this.initBonusAfterAnimation == false) this.initBonus(scene) }
			}

			let durationIndex = (time - this.inittime) / DURATION
			let ANIMATIONCOMPLETED = false
			if (durationIndex >= 1) ANIMATIONCOMPLETED = true
			
			if (ANIMATIONCOMPLETED) {
				this.posy = this.initposy
				this.animationInitialized = this.inittime = this.initposy = this.state = undefined
                if (this.bonusAmount) if (this.initBonusAfterAnimation == true) this.initBonus(scene)
                return true
			}
			else this.posy = this.initposy - AMPLITUDE * Math.sin(Math.PI * durationIndex)
        }
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
        if (this.bonusIndex == this.bonusAmount) this.unbindBonus()
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