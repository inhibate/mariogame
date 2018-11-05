
import CanvasComponent from '../../canvasComponent'
import {SPRITESPATH, CANVASSCENEW} from '../../misc/'

export default class PlayerComponent extends CanvasComponent {

	constructor(posx = 0, posy = 0) {

		const JUMPING = [[142, 45, 159 - 142, 60 - 45] /*L*/, [354, 45, 371 - 354, 60 - 45]]
		const STANDING = [[224, 43, 237 - 224, 60 - 43] /*L*/, [276, 43, 289 - 276, 60 - 43]]

		const [DX, HEIGHT, HEIGHTADDITIONAL, DURATION, DURATIONADDITIONAL] = [5.5, 64, 100, 150, 100]
		const [W, H, SPRITE, SX, SY, SW, SH] = [32, 32, `${SPRITESPATH}/CHARACTERS.png`, STANDING[1][0], STANDING[1][1], STANDING[1][2], STANDING[1][3]]
		
		super(W, H, SPRITE, posx, posy, 'sprite', SX, SY, SW, SH)
		
		this.movement = {DX, HEIGHT, HEIGHTADDITIONAL, DURATION, DURATIONADDITIONAL}
		this.lastPosy = posy
		
		this.defaultWidth = W
		this.defaultHeight = H

		const RR = [
			[291, 43, 304 - 291, 60 - 43],
			[306, 43, 318 - 306, 60 - 43],
			[320, 43, 336 - 320, 60 - 43]
		]

		const RL = [
			[222 - (304 - 291), 43, 304 - 291, 60 - 43],
			[207 - (318 - 306), 43, 318 - 306, 60 - 43],
			[193 - (336 - 320), 43, 336 - 320, 60 - 43]
		]

		this.sprites = {RR, RL, JUMPING, STANDING}
		this.runningSpritesAmount = 3

		this.rsnc = this.direction = this.currentRunningSpriteIndex = this.currentRunningIndex = 0
		
		this.jumpingSpriteNormalizationC = this._spriteNormalization(this.sprites.JUMPING[0]).c
		this.jumpingSpriteNormalizationW = this._spriteNormalization(this.sprites.JUMPING[0]).w

		this.runningSprite1NormalizationC = this._spriteNormalization(this.sprites.RR[1]).c
		this.runningSprite1NormalizationW = this._spriteNormalization(this.sprites.RR[1]).w

		this.runningSprite2NormalizationC = this._spriteNormalization(this.sprites.RR[2]).c
		this.runningSprite2NormalizationW = this._spriteNormalization(this.sprites.RR[2]).w

		this.ifReachedHalf = this.lastTime = this.timeBack = this.t1 = this.collisionType = this.initialDirection = this.movingY = this.inittime = this.initposy = this._initposy = this.spaceunpressed = this.spacepressed = this.duration = this.completedUp = this.once = undefined
	}
	
	_spriteNormalization(sprite) {
		const c = (sprite[2] - this.sprites.STANDING[0][2]) * 2
		const w = this.defaultWidth + c
		return {w, c}
	}

	_clearRSNC() {
		if (this.rsnc !== 0) this.posx = this.posx - this.rsnc
		if (this.rsnc !== 0) this.rsnc = 0
		this.currentRunningSpriteIndex = this.currentRunningIndex = 0
	}
	
	getDurationIndex(currentTime, initTime, duration) {
		let DURATIONINDEX = (currentTime - initTime) / duration
		if (DURATIONINDEX >= 1) DURATIONINDEX = 1
		return DURATIONINDEX
	}

	reachedHalf() { return this.posx + this.width / 2 >= CANVASSCENEW / 2 }

	placeHalf() { this.posx = (CANVASSCENEW - this.width) * 2 ** -1 }

	specifyStanding(direction) {
		if (direction == 0) {
			this.sx = this.sprites.STANDING[1][0]
			this.sy = this.sprites.STANDING[1][1]
			this.sw = this.sprites.STANDING[1][2]
			this.sh = this.sprites.STANDING[1][3]
		}
		else if (direction == 1) {
			this.sx = this.sprites.STANDING[0][0]
			this.sy = this.sprites.STANDING[0][1]
			this.sw = this.sprites.STANDING[0][2]
			this.sh = this.sprites.STANDING[0][3]
		}
	}

	specifyJumping(direction) {
		if (direction == 0) {
			this.sx = this.sprites.JUMPING[1][0]
			this.sy = this.sprites.JUMPING[1][1]
			this.sw = this.sprites.JUMPING[1][2]
			this.sh = this.sprites.JUMPING[1][3]
		}
		else if (direction == 1) {
			this.sx = this.sprites.JUMPING[0][0]
			this.sy = this.sprites.JUMPING[0][1]
			this.sw = this.sprites.JUMPING[0][2]
			this.sh = this.sprites.JUMPING[0][3]
		}
	}

	specifyRunning(direction) {
		if (direction == 0) {
			this.sx = this.sprites.RR[this.currentRunningSpriteIndex][0]
			this.sy = this.sprites.RR[this.currentRunningSpriteIndex][1]
			this.sw = this.sprites.RR[this.currentRunningSpriteIndex][2]
			this.sh = this.sprites.RR[this.currentRunningSpriteIndex][3]
		}
		else if (direction == 1) {
			this.sx = this.sprites.RL[this.currentRunningSpriteIndex][0]
			this.sy = this.sprites.RL[this.currentRunningSpriteIndex][1]
			this.sw = this.sprites.RL[this.currentRunningSpriteIndex][2]
			this.sh = this.sprites.RL[this.currentRunningSpriteIndex][3]
		}
	}

	stand(direction) {
		if (!this.movingY) {
			this.width = this.defaultWidth
			this.specifyStanding(direction)
			this._clearRSNC()
			if (this.reachedHalf()) this.placeHalf()
		}
	}

	moveX(time, direction, components, scene, control) {

		this.direction = direction

		let IFREACHEDHALF = () => (this.ifReachedHalf || this.reachedHalf())

		const IFLEFT = direction == 1
		const MOVEPLAYER = !IFREACHEDHALF() || IFLEFT
		
		const MOVEPLAYERORSCENE = (dx) => {
			if (MOVEPLAYER) this.posx = this.posx + dx
			else scene.move(-dx, [this.componentIdentifier])
		}

		if (IFLEFT) MOVEPLAYERORSCENE(-this.movement.DX)
		else MOVEPLAYERORSCENE(this.movement.DX)

		if (!this.movingY) {
			if (!this.currentRunningIndex) {
				if (direction === 0) {
					if (this.currentRunningSpriteIndex == 0) {
						this.rsnc = 2
						this.width = this.defaultWidth
					}
					if (this.currentRunningSpriteIndex == 1) {
						this.rsnc = -2 * this.runningSprite1NormalizationC
						this.width = this.runningSprite1NormalizationW
					}
					if (this.currentRunningSpriteIndex == 2) {
						this.rsnc = -this.runningSprite2NormalizationC
						this.width = this.runningSprite2NormalizationW
					}
				}
				else if (IFLEFT) {
					if (this.currentRunningSpriteIndex == 0) {
						this.rsnc = 4
						this.width = this.defaultWidth
					}
					if (this.currentRunningSpriteIndex == 1) {
						this.rsnc = this.runningSprite1NormalizationC
						this.width = this.runningSprite1NormalizationW
					}
					if (this.currentRunningSpriteIndex == 2) {
						this.rsnc = -2
						this.width = this.runningSprite2NormalizationW
					}
				}
				this.specifyRunning(direction)
				this.currentRunningSpriteIndex = (this.currentRunningSpriteIndex + 1) % this.runningSpritesAmount
				this.posx = this.posx + this.rsnc
			}
			this.currentRunningIndex = !this.currentRunningIndex
		}
		
		if (this.ifReachedHalf) {
			if (IFLEFT) this.ifReachedHalf = false
		}
		else if (IFREACHEDHALF()) {
			this.placeHalf()
			this.ifReachedHalf = true
		}

		let [posx, posy] = [this.posx, this.posy]
		let h = this.height
		let w = this.width
		
		if (!this.movingY) {
			const collisions = this.collisions(components, posx, posy, w, h)
			const SHOULDMOVEDOWN = collisions.types.includes(collisions.TTYPE) == false
			if (SHOULDMOVEDOWN) {
				if (this.currentRunningSpriteIndex == 0) this.currentRunningSpriteIndex = this.runningSpritesAmount - 1
				else this.currentRunningSpriteIndex--
				return control.DIRECTIONDOWN = true
			}
		}

		if (!this.movingY) posx = this.posx - this.rsnc
		if (!this.movingY) w = this.defaultWidth
		
		const collisions = this.collisions(components, posx, posy, w, h)
		const containsLTYPE = collisions.types.includes(collisions.LTYPE)
		const containsRTYPE = collisions.types.includes(collisions.RTYPE)
		let TYPE;
		if (containsLTYPE) TYPE = collisions.LTYPE
		if (containsRTYPE) TYPE = collisions.RTYPE

		if (containsLTYPE || containsRTYPE) {
			const dx = collisions.first(TYPE).collisionOffset
			MOVEPLAYERORSCENE(dx)
			if (!this.movingY) this.stand(direction)
		}
	}

	moveY(time, control, components, jumping) {

		const ISRIGHT = this.direction == 0

		const updatePosyIncludingCollisionOffset = collisionOffset => this.lastPosy = this.posy = this.posy + collisionOffset

		if (!this.movingY) {
			if (jumping) if (ISRIGHT) this.posx = this.posx - this.jumpingSpriteNormalizationC
			if (jumping) this.width = this.jumpingSpriteNormalizationW
			if (jumping == false) this.completedUp = true
			if (ISRIGHT) this.initialDirection = 0
			this.lastTime = time
			this.inittime = time
			this.initposy = this._initposy = this.posy
			this.timeBack = 0
			this.movingY = true
		}

		const INITIALDIRECTIONRIGHT = this.initialDirection == 0
		const MOVEDOWN = this.completedUp == true
		let posx = this.posx
		let posy = this.posy
		let [w, h] = [this.defaultWidth, this.height]

		if (jumping) {
			this.specifyJumping(this.direction)
			if (INITIALDIRECTIONRIGHT) posx = posx + this.jumpingSpriteNormalizationC
		}
		else {
			this.specifyRunning(this.direction)
			w = this.width
		} 

		const collisions = this.collisions(components, posx, posy, w, h)
		const containsTTYPE = collisions.types.includes(collisions.TTYPE)
		const containsBTYPE = collisions.types.includes(collisions.BTYPE)
		const containsTHROUGHTYPE = collisions.types.includes(collisions.THROUGHTYPE)
		let TYPE;
		if (containsTTYPE) TYPE = collisions.TTYPE
		if (containsBTYPE) TYPE = collisions.BTYPE
		if (containsTHROUGHTYPE) TYPE = collisions.THROUGHTYPE

		if (containsTHROUGHTYPE) this.timeBack = this.timeBack + (time - this.lastTime)

		this.lastPosy = posy
		this.lastTime = time
		time = time - this.timeBack
		
		if (MOVEDOWN) {
			
			let [delayIndex, terminateMovementDown] = [this.duration - this.movement.DURATION]
			const BTYPECOLLISION = this.collisionType == collisions.BTYPE

			if (!BTYPECOLLISION) {
				if (!this.t1) this.t1 = time
				if (time - this.t1 < delayIndex) terminateMovementDown = true
			}

			if (terminateMovementDown) return false

			if (containsTTYPE) {
				if (jumping) if (INITIALDIRECTIONRIGHT) this.posx = this.posx + this.jumpingSpriteNormalizationC
				this.movingY = undefined
				updatePosyIncludingCollisionOffset(collisions.first(TYPE).collisionOffset)
				
				this.stand(this.direction)
				const cs = this.collisions(components, this.posx, this.posy, this.width, this.height)
				const containsLTYPE = cs.types.includes(cs.LTYPE)
				const containsRTYPE = cs.types.includes(cs.RTYPE)
				if (containsLTYPE) TYPE = cs.LTYPE
				if (containsRTYPE) TYPE = cs.RTYPE
				if (containsLTYPE || containsRTYPE) this.posx = this.posx + cs.first(TYPE).collisionOffset

				this.lastTime = this.timeBack = this.t1 = this.collisionType = this.initialDirection = this.inittime = this.initposy = this._initposy = this.spaceunpressed = this.spacepressed = this.duration = this.completedUp = this.once = undefined
				return true
			}
			else this.gravitate(time)
		}
		else {

			let DURATIONINDEX;

			if (containsBTYPE) {
				updatePosyIncludingCollisionOffset(-collisions.first(TYPE).collisionOffset)
				this.completedUp = true
				this.collisionType = TYPE
				return false
			}

			if (control.SPACEPRESSED && !this.spaceunpressed) this.spacepressed = true
			else {
				this.spacepressed = false
				this.spaceunpressed = true
			}
			
			if (this.spacepressed) {
				DURATIONINDEX = this.getDurationIndex(time, this.inittime, this.movement.DURATION)
				this.duration = this.movement.DURATION + (this.movement.DURATIONADDITIONAL * DURATIONINDEX)
				this.initposy = this._initposy - this.movement.HEIGHTADDITIONAL * DURATIONINDEX
			}

 			DURATIONINDEX = this.getDurationIndex(time, this.inittime, this.duration)
 			if (DURATIONINDEX == 1) this.completedUp = true
			
			this.posy = this.initposy - this.movement.HEIGHT * DURATIONINDEX
		}
	}

	gravitate(time) {
		if (!this.once) this.inittime = time
		if (!this.once) this.once = true
		this.posy = this.posy + this.movement.HEIGHT * this.getDurationIndex(time, this.inittime, this.movement.DURATION)
		this.inittime = time
	}

} 