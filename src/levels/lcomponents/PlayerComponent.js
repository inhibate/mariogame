
import CanvasComponent from '../../canvasComponent'
import {SPRITESPATH, CANVASSCENEW} from '../../misc/'

export default class PlayerComponent extends CanvasComponent {

	constructor(posx = 0, posy = 0) {

		const JUMPING = [[142, 45, 159 - 142, 60 - 45] /*L*/, [354, 45, 371 - 354, 60 - 45]]
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

		this.rsnc = this.direction = this.currentRLAIndex = this.currentRRAIndex = this.currentRunningIndex = 0
		
		this.jumpingSpriteNormalizationC = this._spriteNormalization(this.jumping[0]).c
		this.jumpingSpriteNormalizationW = this._spriteNormalization(this.jumping[0]).w

		this.runningSprite1NormalizationC = this._spriteNormalization(this.RRA[1]).c
		this.runningSprite1NormalizationW = this._spriteNormalization(this.RRA[1]).w
		
		this.runningSprite2NormalizationC = this._spriteNormalization(this.RRA[2]).c
		this.runningSprite2NormalizationW = this._spriteNormalization(this.RRA[2]).w


		this.ifReachedHalf = this.lastTime = this.timeBack = this.t1 = this.collisionType = this.initialDirection = this.movingY = this.inittime = this.initposy = this._initposy = this.spaceunpressed = this.spacepressed = this.duration = this.durationIndex = this.completedUp = this.once = undefined

	}
	
	_spriteNormalization(sprite) {
		const c = (sprite[2] - this.standing[0][2]) * 2
		const w = this.defaultWidth + c
		return {w, c}
	}

	_clearRSNC() {
		if (this.rsnc !== 0) this.posx = this.posx - this.rsnc
		if (this.rsnc !== 0) this.rsnc = 0
		this.currentRLAIndex = this.currentRRAIndex = this.currentRunningIndex = 0
	}

	reachedHalf() { return this.posx + this.width / 2 >= CANVASSCENEW / 2 }

	placeHalf() { this.posx = (CANVASSCENEW - this.width) * 2 ** -1 }

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
			this._clearRSNC()
			if (this.reachedHalf()) this.placeHalf()
		}
	}

	moveX(direction, dx, components, scene) {

		if (direction !== false) this.direction = direction

		let IFREACHEDHALF = () => (this.ifReachedHalf || this.reachedHalf())

		const [LTYPE, RTYPE] = ['L', 'R']
		const IFLEFT = direction == 1
		const MOVEPLAYER = !IFREACHEDHALF() || IFLEFT
		
		const MOVEPLAYERORSCENE = (dx) => {
			if (MOVEPLAYER) this.posx = this.posx + dx
			else scene.move(-dx, [this.componentIdentifier])
		}

		MOVEPLAYERORSCENE(dx)

		if (!this.movingY) {
			if (this.currentRunningIndex == 0) {
				if (direction === 0) {
					if (this.currentRRAIndex == 0) {
						this.rsnc = 2
						this.width = this.defaultWidth
					}
					if (this.currentRRAIndex == 1) {
						this.rsnc = -2 * this.runningSprite1NormalizationC
						this.width = this.runningSprite1NormalizationW
					}
					if (this.currentRRAIndex == 2) {
						this.rsnc = -this.runningSprite2NormalizationC
						this.width = this.runningSprite2NormalizationW
					}
				}
				else if (IFLEFT) {
					if (this.currentRLAIndex == 0) {
						this.rsnc = 4
						this.width = this.defaultWidth
					}
					if (this.currentRLAIndex == 1) {
						this.rsnc = this.runningSprite1NormalizationC
						this.width = this.runningSprite1NormalizationW
					}
					if (this.currentRLAIndex == 2) {
						this.rsnc = -2
						this.width = this.runningSprite2NormalizationW
					}
				}
				this.specifyRunning(direction)
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
		let w = this.defaultWidth
		
		if (this.movingY) w = this.width
		else posx = this.posx - this.rsnc

		const collisions = this.collisions(components, posx, posy, w, h)
		const containsLTYPE = collisions.types.includes(LTYPE)
		const containsRTYPE = collisions.types.includes(RTYPE)
		let TYPE;
		if (containsLTYPE) TYPE = LTYPE
		if (containsRTYPE) TYPE = RTYPE

		if (containsLTYPE || containsRTYPE) {
			const dx = collisions.first(TYPE).collisionOffset
			MOVEPLAYERORSCENE(dx)
			if (!this.movingY) this.stand(direction)
		}
	}

	moveY(time, height, aheight, duration, aduration, spacepressed, direction, components) {

		const ISRIGHT = this.direction == 0
		let durationIndex;

		if (!this.movingY) {

			this._clearRSNC()
			this.movingY = true
			this.width = this.jumpingSpriteNormalizationW
			if (undefined == this.timeBack) this.timeBack = 0
			if (undefined == this.lastTime) this.lastTime = time
			if (undefined == this.inittime) this.inittime = time
			if (undefined == this.initposy) this.initposy = this._initposy = this.posy
			
			if (ISRIGHT) {
				this.posx = this.posx - this.jumpingSpriteNormalizationC
				this.initialDirection = 0
			}
		}
		
		this.specifyJumping(this.direction)
		
		const INITIALDIRECTIONRIGHT = this.initialDirection == 0
		const [w, h] = [this.defaultWidth, this.height]
		let posx = this.posx
		let posy = this.posy
		if (INITIALDIRECTIONRIGHT) posx = posx + this.jumpingSpriteNormalizationC

		const collisions = this.collisions(components, posx, posy, w, h)
		const [TTYPE, BTYPE, THROUGHTYPE] = ['T', 'B', 'THROUGH']
		const containsTTYPE = collisions.types.includes(TTYPE)
		const containsBTYPE = collisions.types.includes(BTYPE)
		const containsTHROUGHTYPE = collisions.types.includes(THROUGHTYPE)
		let TYPE;
		if (containsTTYPE) TYPE = TTYPE
		if (containsBTYPE) TYPE = BTYPE
		if (containsTHROUGHTYPE) TYPE = THROUGHTYPE

		if (containsTHROUGHTYPE) this.timeBack = this.timeBack + (time - this.lastTime)

		this.lastPosy = posy
		this.lastTime = time
		time = time - this.timeBack
		
		if ((durationIndex = (time - this.inittime) / duration) >= 1) durationIndex = 1

		if (this.completedUp) {

			if (this.collisionType != 'B') {
				if (!this.t1) this.t1 = time
				if (time - this.t1 < (this.duration - duration)) return false
			}

			this.inittime = time

			if (containsTTYPE) {
				if (INITIALDIRECTIONRIGHT) this.posx = this.posx + this.jumpingSpriteNormalizationC
				this.movingY = undefined
				this.stand(this.direction)
				this.posy = this.posy + collisions.first(TYPE).collisionOffset
				return !(this.lastTime = this.timeBack = this.t1 = this.collisionType = this.initialDirection = this.inittime = this.initposy = this._initposy = this.spaceunpressed = this.spacepressed = this.duration = this.durationIndex = this.completedUp = this.once = undefined)
			}

			if (!this.once) this.once = true
			else this.posy = this.posy + height * durationIndex
			//this.gravitate(duration, aduration)
		}
		else {

			if (containsBTYPE) {
				this.completedUp = true
				this.posy = this.posy - collisions.first(TYPE).collisionOffset
				this.collisionType = TYPE
				return false
			}

			if (!this.spaceunpressed && spacepressed) this.spacepressed = true
			else {
				this.spacepressed = false
				this.spaceunpressed = true
			}
			
			if (this.spacepressed) {
				this.duration = duration + (aduration * durationIndex)
				this.initposy = this._initposy - aheight * durationIndex
			}

 			this.durationIndex = (time - this.inittime) / this.duration
			if (this.durationIndex >= 1) this.durationIndex = this.completedUp = 1
			
			this.posy = this.initposy - height * this.durationIndex
		}
	}

	gravitate(duration, aduration) {}

} 