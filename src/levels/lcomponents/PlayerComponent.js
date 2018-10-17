
import CanvasComponent from '../../canvasComponent'
import {SPRITESPATH, CANVASSCENEW} from '../../misc/'

export default class PlayerComponent extends CanvasComponent {

	constructor(posx = 0, posy = 0) {

		const JUMPING = [[141, 43, 158 - 141, 60 - 43] /*L*/, [354, 43, 371 - 354, 60 - 43]]
		const STANDING = [[223, 43, 236 - 223, 60 - 43] /*L*/, [276, 43, 289 - 276, 60 - 43]]

		const [W, H, SPRITE, SX, SY, SW, SH] = [32, 32, `${SPRITESPATH}/CHARACTERS.png`, STANDING[1][0], STANDING[1][1], STANDING[1][2], STANDING[1][3]]
		
		super(W, H, SPRITE, posx, posy, 'sprite', SX, SY, SW, SH)

		this.defaultWidth = W
		this.defaultHeight = H

		this.jumping = JUMPING
		this.standing = STANDING

		this.RRA = [
			[291, 43, 304 - 291, 60 - 43],
			[306, 43, 318 - 306, 60 - 43],
			[320, 43, 336 - 320, 60 - 43]
		]

		this.RLA = [
			[221 - (304 - 291), 43, 304 - 291, 60 - 43],
			[206 - (318 - 306), 43, 318 - 306, 60 - 43],
			[192 - (336 - 320), 43, 336 - 320, 60 - 43]
		]

		this.currentRRAIndex = 0
		this.currentRLAIndex = 0
		this.currentRunningIndex = 0
		this.direction = 0
		
		this.jumpingSpriteNormalizationC = this._spriteNormalization(this.jumping[0]).c
		this.jumpingSpriteNormalizationW = this._spriteNormalization(this.jumping[0]).w

		this.runningSprite1NormalizationC = this._spriteNormalization(this.RRA[1]).c
		this.runningSprite1NormalizationW = this._spriteNormalization(this.RRA[1]).w
		
		this.runningSprite2NormalizationC = this._spriteNormalization(this.RRA[2]).c
		this.runningSprite2NormalizationW = this._spriteNormalization(this.RRA[2]).w


		this.t1 = this.initialDirection = this.movingY = this.inittime = this.initposy = this._initposy = this.spaceunpressed = this.spacepressed = this.duration = this.durationIndex = this.completedUp = this.once = undefined

	}
	
	_spriteNormalization(sprite) {
		const c = (sprite[2] - this.standing[0][2]) * 2
		const w = this.defaultWidth + c
		return {w, c}
	}

	reachedHalf() { return this.posx + this.width / 2 >= CANVASSCENEW / 2 }

	specifyStanding(direction) {
		if (direction == 0) {
			this.sx = this.standing[1][0]
			this.sy = this.standing[1][1]
			this.sw = this.standing[1][2]
			this.sh = this.standing[1][3]
		}
		else if (direction == 1) {
			this.sx = this.standing[0][0]
			this.sy = this.standing[0][1]
			this.sw = this.standing[0][2]
			this.sh = this.standing[0][3]
		}
	}

	specifyJumping(direction) {
		if (direction == 0) {
			this.sx = this.jumping[1][0]
			this.sy = this.jumping[1][1]
			this.sw = this.jumping[1][2]
			this.sh = this.jumping[1][3]
		}
		else if (direction == 1) {
			this.sx = this.jumping[0][0]
			this.sy = this.jumping[0][1]
			this.sw = this.jumping[0][2]
			this.sh = this.jumping[0][3]
				 
		}
	}

	specifyRunning(direction) {
		if (direction == 0) {
			this.sx = this.RRA[this.currentRRAIndex][0]
			this.sy = this.RRA[this.currentRRAIndex][1]
			this.sw = this.RRA[this.currentRRAIndex][2]
			this.sh = this.RRA[this.currentRRAIndex][3]
			this.currentRRAIndex = (1 + this.currentRRAIndex) % this.RRA.length
		}
		else if (direction == 1) {
			this.sx = this.RLA[this.currentRLAIndex][0]
			this.sy = this.RLA[this.currentRLAIndex][1]
			this.sw = this.RLA[this.currentRLAIndex][2]
			this.sh = this.RLA[this.currentRLAIndex][3]
			this.currentRLAIndex = (1 + this.currentRLAIndex) % this.RLA.length
		}
	}

	stand(direction) {
		if (!this.movingY) {
			this.width = this.defaultWidth
			this.specifyStanding(direction)
		}
	}

	moveX(direction, dx) {
		if (!this.movingY) {
			if (this.currentRunningIndex == 0) {

				if (direction === 0) {
					if (this.currentRRAIndex == 0) {
						this.posx = this.posx + 2
						this.width = this.defaultWidth
					}
					if (this.currentRRAIndex == 1) {
						this.posx = this.posx - 2 * this.runningSprite1NormalizationC
						this.width = this.runningSprite1NormalizationW
					}
					if (this.currentRRAIndex == 2) {
						this.posx = this.posx - this.runningSprite2NormalizationC
						this.width = this.runningSprite2NormalizationW
					}
				}
				else if (direction == 1) {
					if (this.currentRLAIndex == 0) {
						this.posx = this.posx + 4
						this.width = this.defaultWidth
					}
					if (this.currentRLAIndex == 1) {
						this.posx = this.posx + this.runningSprite1NormalizationC
						this.width = this.runningSprite1NormalizationW
					}
					if (this.currentRLAIndex == 2) {
						this.posx = this.posx - 2
						this.width = this.runningSprite2NormalizationW
					}
				}
				this.specifyRunning(direction)
			}
			this.currentRunningIndex = !this.currentRunningIndex
		}

		if (this.reachedHalf() == false || direction == 1) this.posx = this.posx + dx
		if (direction !== false) this.direction = direction
	}

	moveY(time, height, aheight, duration, aduration, spacepressed, direction, levelComponents) {

		if (!this.movingY) {

			if (!this.inittime) this.inittime = time
			if (!this.initposy) this.initposy = this._initposy = this.posy
			
			if (this.direction == 0) {
				this.initialDirection = 0
				this.posx = this.posx - this.jumpingSpriteNormalizationC
			}			
			this.width = this.jumpingSpriteNormalizationW
			this.movingY = true
		}
		this.specifyJumping(this.direction)

		let durationIndex = (time - this.inittime) / duration
		if (durationIndex >= 1) durationIndex = 1
		
		if (this.completedUp) {
		 
			if (!this.t1) this.t1 = time
			if (time - this.t1 < (this.duration - duration)) return false
			
			this.inittime = time

			for (let i = 0; i < levelComponents.length; ++i) {
				
				const [component, componentIdentifier] = [levelComponents[i].component, levelComponents[i].componentIdentifier]
				
				if (componentIdentifier != 'player' && componentIdentifier != 'bg') {
					
					const INITIALDIRECTIONRIGHT = this.initialDirection == 0
					const posx = this.posx + (INITIALDIRECTIONRIGHT ? this.jumpingSpriteNormalizationC : 0)

					let collideY = this.posy + this.height >= component.posy
					let collideX = (posx + this.defaultWidth > component.posx) && (posx < component.posx + component.width)
					
					if (collideX && collideY) {
						if (INITIALDIRECTIONRIGHT) this.posx = this.posx + this.jumpingSpriteNormalizationC
						this.movingY = undefined
						this.stand(this.direction)
						this.posy = this.posy - ((this.posy + this.height) - component.posy)
						return !(this.t1 = this.initialDirection = this.inittime = this.initposy = this._initposy = this.spaceunpressed = this.spacepressed = this.duration = this.durationIndex = this.completedUp = this.once = undefined)
					}
				}
			}
			if (!this.once) this.once = true
			else this.posy = this.posy + height * durationIndex
		}
		else {
			if (!this.spaceunpressed && spacepressed) {
				this.spacepressed = true
			}
			else {
				this.spacepressed = false
				this.spaceunpressed = true
			}
			
			if (this.spacepressed) {
				this.duration = duration + (aduration * durationIndex)
				this.initposy = this._initposy - aheight * durationIndex
			}

 			this.durationIndex = (time - this.inittime) / this.duration 
			
			if (this.durationIndex >= 1) 
				this.durationIndex = this.completedUp = 1
			
			this.posy = this.initposy - height * this.durationIndex
		}
	}

} 