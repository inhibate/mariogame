
//https://www.mariowiki.com/Super_Mario_Bros.

import CanvasComponent from '../../canvasComponent'
import NPC from './NPC'

/*
Goomba. Mushroom traitors that walk back and forth.
They are the most weak and common enemies throughout the game and can be stomped or hit with fireballs or a Starman.  
*/
export default class GoombaNPC extends NPC {

	/* @pallete = 0 GREY */
	/* @pallete = 1 BLUE */
	/* @pallete = 2 BROWN */
	constructor(posx, posy, pallete = 2, direction = 0) {

		const [MAXFRAMEINDEX, DELAY] = [7, 500]
		const SPRITES = {
			// [SX, SY, SW, SH, W, H]
			0: [/*STOMPED*/[163, 195, 16, 8, 16 * 2, 8 * 2], /*ANIMATION*/[182, 187, 16, 16, 16 * 2, 16 * 2], [201, 187, 16, 16, 16 * 2, 16 * 2]],
			1: [/*STOMPED*/[220, 195, 16, 8, 16 * 2, 8 * 2], /*ANIMATION*/[239, 187, 16, 16, 16 * 2, 16 * 2], [258, 187, 16, 16, 16 * 2, 16 * 2]],
			2: [/*STOMPED*/[277, 195, 16, 8, 16 * 2, 8 * 2], /*ANIMATION*/[296, 187, 16, 16, 16 * 2, 16 * 2], [315, 187, 16, 16, 16 * 2, 16 * 2]]
		}

		const SPRITE = SPRITES[pallete]
		const [SX, SY, SW, SH, W, H] = SPRITE[1]
		super(W, H, CanvasComponent.SPRITES.CHARACTERS, posx, posy, 'sprite', SX, SY, SW, SH)

		this.SPRITE = SPRITE
		this.state = this.states.WALKING
		this.animationParameters = {MAXFRAMEINDEX, DELAY}
		this.direction = direction
		this.frameIndex = 0
		this.sxsyswshIndex = 1
	}

	specifySXSYSWSH() {
		this.sx = this.SPRITE[this.sxsyswshIndex][0]
		this.sy = this.SPRITE[this.sxsyswshIndex][1]
		this.sw = this.SPRITE[this.sxsyswshIndex][2]
		this.sh = this.SPRITE[this.sxsyswshIndex][3]
	}

	stomp() {
		this.state = this.states.STOMPED
		this.sxsyswshIndex = 0
		this.specifySXSYSWSH()
		this.height = this.SPRITE[this.sxsyswshIndex][5]
		this.posy = this.posy + this.SPRITE[this.sxsyswshIndex][5]
		this.collidable = false
	}

	animate(time, scene) {

		if (this.state == this.states.WALKING) {
			if ((++this.frameIndex % this.animationParameters.MAXFRAMEINDEX) == 0) {
				this.frameIndex = 0
				this.specifySXSYSWSH()
				if (this.sxsyswshIndex == 1) {
					this.sxsyswshIndex = 2
				}
				else if (this.sxsyswshIndex == 2) {
					this.sxsyswshIndex = 1
				}
			}
			this.lookForActions(scene)
		}
	
		else if (this.state == this.states.STOMPED) {
			if (!this.init) {
				this.inittime = time
				this.init = true
			}
			if (time - this.inittime >= this.animationParameters.DELAY) {
				scene.unbindComponent(this.componentIdentifier)
				return true
			}
		}
	}

}