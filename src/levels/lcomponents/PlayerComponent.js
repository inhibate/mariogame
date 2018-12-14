
import CanvasComponent from '../../canvasComponent'
import GraphicalTextComponent from './GraphicalTextComponent'
import Collision from '../../collision'
import {delay, CANVASSCENEW} from '../../misc/'

export default class PlayerComponent extends CanvasComponent {

	constructor(posx = 0, posy = 0) {

		const JUMPING = [[142, 45, 159 - 142, 60 - 45] /*L*/, [354, 45, 371 - 354, 60 - 45]]
		const STANDING = [[224, 43, 237 - 224, 60 - 43] /*L*/, [276, 43, 289 - 276, 60 - 43]]

		const [DX, DY, HEIGHT, HEIGHTADDITIONAL, DURATION, DURATIONADDITIONAL] = [5.5, 6.5, 64, 100, 150, 100]
		const [W, H, SPRITE, SX, SY, SW, SH] = [32, 32, CanvasComponent.SPRITES.CHARACTERS, STANDING[1][0], STANDING[1][1], STANDING[1][2], STANDING[1][3]]
		const [SADURATION, SADY] = [110, 4.5]
		super(W, H, SPRITE, posx, posy, 'sprite', SX, SY, SW, SH)
		
		this.animationParameters = {SADURATION, SADY}
		this.movement = {DX, DY, HEIGHT, HEIGHTADDITIONAL, DURATION, DURATIONADDITIONAL}
		this.NPCPREFIXRE = /^(?:npc\-)/
		
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

		this.ifReachedHalf = this.collisionType = this.initialDirection = this.movingY = this.inittime = this.initposy = this._initposy = this.spaceunpressed = this.spacepressed = this.duration = this.completedUp = undefined
	}
	
	_spriteNormalization(sprite) {
		const c = (sprite[2] - this.sprites.STANDING[0][2]) * 2
		const w = this.defaultWidth + c
		return {w, c}
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
			this.currentRunningSpriteIndex = this.currentRunningIndex = 0
			this.width = this.defaultWidth
			this.specifyStanding(direction)
			if (this.rsnc !== 0) this.posx = this.posx - this.rsnc
			if (this.rsnc !== 0) this.rsnc = 0
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

		const collisions = Collision.detect(components, this)
		const containsLTYPE = collisions.types.includes(collisions.LTYPE)
		const containsRTYPE = collisions.types.includes(collisions.RTYPE)
		let TYPE;
		if (containsLTYPE) TYPE = collisions.LTYPE
		if (containsRTYPE) TYPE = collisions.RTYPE

		if (this.NPC(scene, collisions)) return false

		if (!this.movingY) {
			const SHOULDMOVEDOWN = collisions.types.includes(collisions.TTYPE) == false
			if (SHOULDMOVEDOWN) {
				if (this.currentRunningSpriteIndex == 0) this.currentRunningSpriteIndex = this.runningSpritesAmount - 1
				else this.currentRunningSpriteIndex--
				return control.DIRECTIONDOWN = true
			}
		}

		if (containsLTYPE || containsRTYPE) {
			const collision = collisions.first(TYPE)
			if (this.movingY) MOVEPLAYERORSCENE(collision.collisionOffset)
			else {
				const collidedComponent = scene.getBindedComponent(collision.componentIdentifier)
				this.stand(direction)
				if (TYPE == collisions.LTYPE) this.posx = collidedComponent.posx - this.width
				if (TYPE == collisions.RTYPE) this.posx = collidedComponent.posx + collidedComponent.width
				this.ifReachedHalf = false
			}
		}
	}

	moveY(time, jumping, components, scene, control) {

		const updatePosyIncludingCollisionOffset = collisionOffset => this.posy = this.posy + collisionOffset
		const ISRIGHT = this.direction == 0
		
		if (!this.movingY) {
			if (ISRIGHT) this.initialDirection = 0
			if (jumping == false) this.completedUp = true
			if (jumping) if (ISRIGHT) this.posx = this.posx - this.jumpingSpriteNormalizationC
			if (jumping) this.width = this.jumpingSpriteNormalizationW
			this.inittime = time
			this.initposy = this._initposy = this.posy
			this.movingY = true
		}

		const [di0, di1, BTYPE] = ['di0', 'di1', 'B']
		const MOVEDOWN = this.completedUp == true

		if (MOVEDOWN) {
			if (this.collisionType != BTYPE && !this.collidedNPC) if (delay(di0, this, time, this.duration - this.movement.DURATION)) return false
			this.gravitate()
		}
		else {
			if (this.collidedNPC) {
				if (delay(di1, this, time, this.animationParameters.SADURATION)) {
					this.posy = this.posy - this.animationParameters.SADY
				}
				else {
					delay.clear(di1, this)
					this.completedUp = true
					delete this.collidedNPC
				}
			}
			else {
				let DURATIONINDEX;
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

		if (jumping)
			this.specifyJumping(this.direction)
		else
			this.specifyRunning(this.direction)

		const collisions = Collision.detect(components, this)
		const containsTTYPE = collisions.types.includes(collisions.TTYPE)
		const containsBTYPE = collisions.types.includes(collisions.BTYPE)
		let TYPE;
		if (containsTTYPE) TYPE = collisions.TTYPE
		if (containsBTYPE) TYPE = collisions.BTYPE
		
		if (this.NPC(scene, collisions)) return false

		if (MOVEDOWN) {
			if (containsTTYPE) {
				if (jumping) if (ISRIGHT) this.posx = this.posx + this.jumpingSpriteNormalizationC
				this.movingY = undefined
				delay.clear(di0, this)
				updatePosyIncludingCollisionOffset(collisions.first(TYPE).collisionOffset)
				this.stand(this.direction)
				const cs = Collision.detect(components, this)
				const containsLTYPE = cs.types.includes(cs.LTYPE)
				const containsRTYPE = cs.types.includes(cs.RTYPE)
				if (containsLTYPE) TYPE = cs.LTYPE
				if (containsRTYPE) TYPE = cs.RTYPE
				if (containsLTYPE || containsRTYPE) this.posx = this.posx + cs.first(TYPE).collisionOffset
				this.collisionType = this.initialDirection = this.inittime = this.initposy = this._initposy = this.spaceunpressed = this.spacepressed = this.duration = this.completedUp = undefined
				return true	
			}
		}
		else {
			if (containsBTYPE) {
				if (this.collidedNPC == true) {
					delay.clear(di1, this)
					delete this.collidedNPC
				}
				collisions.collisions.filter(collision => collision.collisionType == collisions.BTYPE).forEach(collision => scene.getBindedComponent(collision.componentIdentifier).hit(scene))
				this.collisionType = TYPE
				this.completedUp = true
				updatePosyIncludingCollisionOffset(-collisions.first(TYPE).collisionOffset)
				return false
			}
		}
	}

	gravitate() { this.posy = this.posy + this.movement.DY }

	NPC(scene, collisions) {
		if (!collisions) collisions = Collision.detect(components, this)
		const {TTYPE, BTYPE, LTYPE, RTYPE} = collisions
		const NPCcollisions = collisions.collisions.filter(collision => this.NPCPREFIXRE.test(collision.componentIdentifier))
		const die = 0 < NPCcollisions.filter(collision => collision.collisionType == BTYPE || collision.collisionType == LTYPE || collision.collisionType == RTYPE).length
		const stomps = NPCcollisions.filter(collision => collision.collisionType == TTYPE)
		const stompsSomeone = 0 < stomps.length
		const collidedNPC = die || stompsSomeone

		if (collidedNPC) scene.render(true)

		if (die) this.die(scene)
		else if (stompsSomeone) {
			let scoreValue = 0
			stomps.forEach(collision => {
				const npccomponent = scene.getBindedComponent(collision.componentIdentifier)
				scoreValue = scoreValue + npccomponent.scoreValue
				npccomponent.stomp()
			})
			this.collideNPC(scene, scoreValue)
		}
		return collidedNPC
	}

	collideNPC(scene, score) {
		this.collidedNPC = true
		this.completedUp = false
		const GTC = new GraphicalTextComponent(`${score}`, this.posx + 10, this.posy - 30, 1.4, 600, 35)
		scene.bindComponentForAnimation(GTC.componentIdentifier)
		scene.bindComponent(GTC, GTC.componentIdentifier)
		scene.bindComponent(GTC)
	}

	die(scene) {
		// clear componentsForAnimation & add only player
		// change sprite
		// delay N0 ms
		// movement up N1 ms
		// movement down (until end of the sceneH)
	}

	control(passedTime, components, scene, control) {
		if (control.DIRECTIONLEFT) {
			this.moveX(passedTime, 1, components, scene, control)
		}
		else if (control.DIRECTIONRIGHT) {
			this.moveX(passedTime, 0, components, scene, control)
		}
		else this.stand(this.direction)

		if (control.DIRECTIONDOWN) {
			if (this.moveY(passedTime, false, components, scene, control)) control.DIRECTIONDOWN = control.DIRECTIONUPDOWN = false
		}
		else if (control.DIRECTIONUPDOWN) {
			if (this.moveY(passedTime, true, components, scene, control)) control.DIRECTIONUPDOWN = false
		}
	}
} 