
import {delay, after, isfunc, CANVASSCENEW, CANVASSCENEH, precision, randomizeNumber} from '../misc/'
import CanvasComponent from '../canvasComponent'
import Collision from '../collision'
import Control from '../control'
import {SFX, Music} from '../sound'
import {bindGraphicalTextContainer} from './container/GraphicalTextContainer'
import ControlPointComponent from './ControlPointComponent'
import CoinBonusComponent from './bonus/CoinBonusComponent'

import Display from '../display'
import Stat from '../stat'
const {entries} = Object

export default class PlayerBoxComponent extends CanvasComponent {

	constructor(posx = 0, posy = 0) {

		const CLIMBING = [[[111, 44, 13, 16], [127, 44, 12, 16]], [[389, 44, 13, 16], [374, 44, 12, 16]]]
		const JUMPING = [[142, 45, 159 - 142, 60 - 45] /*L*/, [354, 45, 371 - 354, 60 - 45]]
		const STANDING = [[224, 43, 237 - 224, 60 - 43] /*L*/, [276, 43, 289 - 276, 60 - 43]]
		const SDIE = [13, 46, 27 - 13, 60 - 46]
		const [DX, DY, HEIGHT, HEIGHTADDITIONAL, DURATION, DURATIONADDITIONAL] = [5.5, 6.5, 64, 100, 150, 100]
		const [W, H, SPRITE, SX, SY, SW, SH] = [32, 32, CanvasComponent.SPRITES.CHARACTERS, STANDING[1][0], STANDING[1][1], STANDING[1][2], STANDING[1][3]]
		const [SADURATION, SADY, FLAGPOLEDY] = [130, 6, 4]
		const [IPENETRATE, LPENETRATE, DIE, FROMPIPE, ALONGFLAGPOLESTICK, MOVECASTLE] = [0, 1, 2, 3, 4, 5]
		const [WALKING, SLUGGISHRUNNING, RUNNING] = [0, 1, 2]
		
		const identifier = 'player'
		super(W, H, SPRITE, posx, posy, 'sprite', SX, SY, SW, SH)
		
		this.animationTypes = {IPENETRATE, LPENETRATE, DIE, FROMPIPE, ALONGFLAGPOLESTICK, MOVECASTLE}
		this.animationParameters = {SADURATION, SADY}
		this.movement = {DX, DY, FLAGPOLEDY, HEIGHT, HEIGHTADDITIONAL, DURATION, DURATIONADDITIONAL}
		this.movement.modes = {WALKING, SLUGGISHRUNNING, RUNNING}
		this.movement.mode = this.movement.modes.RUNNING

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

		this.sprites = {RR, RL, JUMPING, STANDING, SDIE, CLIMBING}
		this.runningSpritesAmount = 3

		this.rsnc = this.direction = this.currentRunningSpriteIndex = this.currentRunningIndex = 0
		this.currentClimbingSpriteIndex = this.currentClimbingFrameIndex = 0
		
		this.jumpingSpriteNormalizationC = this._spriteNormalization(this.sprites.JUMPING[0]).c
		this.jumpingSpriteNormalizationW = this._spriteNormalization(this.sprites.JUMPING[0]).w

		this.runningSprite1NormalizationC = this._spriteNormalization(this.sprites.RR[1]).c
		this.runningSprite1NormalizationW = this._spriteNormalization(this.sprites.RR[1]).w

		this.runningSprite2NormalizationC = this._spriteNormalization(this.sprites.RR[2]).c
		this.runningSprite2NormalizationW = this._spriteNormalization(this.sprites.RR[2]).w

		this.ifReachedHalf = this.collisionType = this.initialDirection = this.movingY = this.inittime = this.initposy = this._initposy = this.spaceunpressed = this.spacepressed = this.duration = this.completedUp = undefined
		this.componentIdentifier = identifier
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

	underScene() { return this.posy - 50 > CANVASSCENEH }

	aboveScene() { return this.posy + this.height < -50 }

	reachedHalf() { return this.posx + this.width / 2 >= CANVASSCENEW / 2 }

	placeHalf() { this.posx = (CANVASSCENEW - this.width) * 2 ** -1 }

	specifyClimbing(direction) {
		if (direction == 0) {
			this.sx = this.sprites.CLIMBING[1][this.currentClimbingSpriteIndex][0]
			this.sy = this.sprites.CLIMBING[1][this.currentClimbingSpriteIndex][1]
			this.sw = this.sprites.CLIMBING[1][this.currentClimbingSpriteIndex][2]
			this.sh = this.sprites.CLIMBING[1][this.currentClimbingSpriteIndex][3]
		}
		else if (direction == 1) {
			this.sx = this.sprites.CLIMBING[0][this.currentClimbingSpriteIndex][0]
			this.sy = this.sprites.CLIMBING[0][this.currentClimbingSpriteIndex][1]
			this.sw = this.sprites.CLIMBING[0][this.currentClimbingSpriteIndex][2]
			this.sh = this.sprites.CLIMBING[0][this.currentClimbingSpriteIndex][3]
		}
	}

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

	specifyDying() {
		this.sx = this.sprites.SDIE[0]
		this.sy = this.sprites.SDIE[1]
		this.sw = this.sprites.SDIE[2]
		this.sh = this.sprites.SDIE[2]
	}

	specifyFrameRunning(frame, direction) {
		const [DLEFT, DRIGHT] = [direction == 1, direction == 0]
		if (this.currentRunningIndex++ == frame) {
			if (DRIGHT) {
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
			else if (DLEFT) {
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
			this.currentRunningIndex = 0
			this.posx = this.posx + this.rsnc
		}
	}

	stand(direction) {
		if (!this.movingY) {
			this.currentRunningSpriteIndex = this.currentRunningIndex = 0
			this.width = this.defaultWidth
			this.specifyStanding(direction)
			if (this.rsnc !== 0) this.posx = this.posx - this.rsnc
			if (this.rsnc !== 0) this.rsnc = 0
			if (!this.ifSceneReachedEnd) if (this.reachedHalf()) this.placeHalf()
		}
	}

	climb(direction) {
		this.specifyClimbing(direction)
		this.width = this.sw * 2
		this.height = this.sh * 2
	}

	moveX(time, direction, components, scene, control) {

		this.direction = direction

		let [DX, MAXFRAMEINDEX] = []
		const IFREACHEDHALF = () => (this.ifReachedHalf || this.reachedHalf())
		const [IFLEFT] = [direction == 1]
		const {WALKING, SLUGGISHRUNNING, RUNNING} = this.movement.modes

		if (!this.ifSceneReachedEnd) this.ifSceneReachedEnd = scene.backgroundOffset() >= 0

		const MOVEPLAYERORSCENE = dx => {
			if (this.ifSceneReachedEnd || !IFREACHEDHALF() || IFLEFT) this.posx = this.posx + dx
			else {
				scene.move(-dx, [this.componentIdentifier])
				const sceneOffset = scene.backgroundOffset()
				const sceneReachedEnd = sceneOffset >= 0
				if (sceneReachedEnd) {
					this.ifSceneReachedEnd = true
					scene.move(sceneOffset, [this.componentIdentifier])
				}
			}
		}
		
		if (this.movement.mode == WALKING) {
			DX = this.movement.DX / 4
			MAXFRAMEINDEX = 6
		}
		else if (this.movement.mode == SLUGGISHRUNNING) {
			DX = this.movement.DX / 2
			MAXFRAMEINDEX = 3
		}
		else if (this.movement.mode == RUNNING) {
			DX = this.movement.DX
			MAXFRAMEINDEX = 1
		}

		if (IFLEFT) MOVEPLAYERORSCENE(-DX)
		else MOVEPLAYERORSCENE(DX)

		if (!this.movingY) this.specifyFrameRunning(MAXFRAMEINDEX, direction)

		if (!this.ifSceneReachedEnd) {
			if (this.ifReachedHalf) { if (IFLEFT) this.ifReachedHalf = false }
			else if (IFREACHEDHALF()) {
				this.placeHalf()
				this.ifReachedHalf = true
			}
		}

		const collisions = Collision.detect(components, this)
		if (this.processCollisionWithComponents(scene, collisions)) return false

		const containsLTYPE = collisions.types.includes(collisions.LTYPE)
		const containsRTYPE = collisions.types.includes(collisions.RTYPE)
		let TYPE;
		if (containsLTYPE) TYPE = collisions.LTYPE
		if (containsRTYPE) TYPE = collisions.RTYPE

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
				if (TYPE == collisions.LTYPE) MOVEPLAYERORSCENE(collidedComponent.posx - (this.posx + this.width))
				if (TYPE == collisions.RTYPE) MOVEPLAYERORSCENE((collidedComponent.posx + collidedComponent.width) - this.posx)
			}
		}
	}
	
	clearMoveYProperties() { this.movingY = this.collisionType = this.initialDirection = this.inittime = this.initposy = this._initposy = this.spaceunpressed = this.spacepressed = this.duration = this.completedUp = undefined }

	moveY(time, jumping, components, scene, control) {

		const updatePosyIncludingCollisionOffset = collisionOffset => this.posy = this.posy + collisionOffset
		const [di0, di1, BTYPE, ISRIGHT] = ['di0', 'di1', 'B', this.direction == 0]

		if (!this.movingY) {
			if (jumping) SFX.jump.play()
			if (ISRIGHT) this.initialDirection = 0
			if (jumping == false) this.completedUp = true
			if (jumping) if (ISRIGHT) this.posx = this.posx - this.jumpingSpriteNormalizationC
			if (jumping) this.width = this.jumpingSpriteNormalizationW
			this.inittime = time
			this.initposy = this._initposy = this.posy
			this.movingY = true
		}
		const MOVEDOWN = this.completedUp == true
		this.achievedPlatform = this.achievedPlatformPieceID = undefined

		if (MOVEDOWN) {
			if (this.collisionType != BTYPE && !this.collidedNPC) if (delay(di0, this, time, this.duration - this.movement.DURATION)) return false
			if (this.gravitate(scene)) this.die(scene, false, true)
		}
		else {
			if (this.collidedNPC) {
				if (delay(di1, this, time, this.animationParameters.SADURATION)) {
					this.posy = this.posy - this.animationParameters.SADY
				}
				else {
					this.completedUp = true
					delay.clear(di1, this)
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
		if (this.processCollisionWithComponents(scene, collisions)) return false

		const containsTTYPE = collisions.types.includes(collisions.TTYPE)
		const containsBTYPE = collisions.types.includes(collisions.BTYPE)
		let TYPE;
		if (containsTTYPE) TYPE = collisions.TTYPE
		if (containsBTYPE) TYPE = collisions.BTYPE

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
				this.clearMoveYProperties()
				return true	
			}
		}
		else {
			if (containsBTYPE) {
				updatePosyIncludingCollisionOffset(-collisions.first(TYPE).collisionOffset)
				this.collisionType = TYPE
				this.completedUp = true
				after(100, () => SFX.jump.stop())
				SFX.bump.play()
				if (this.collidedNPC == true) {
					delay.clear(di1, this)
					delete this.collidedNPC
				}
				let hittedComponents = []
				for (let i = 0; i < collisions.collisions.length; i++) {
					const collision = collisions.collisions[i]
					if (collision.collisionType == collisions.BTYPE) {
						const component = scene.getBindedComponent(collision.componentIdentifier)
						const componentHitMethodSupport = isfunc(component.hit)
						if (componentHitMethodSupport) hittedComponents[hittedComponents.length] = component
					}
				}
				if (hittedComponents.length > 0) {
					let [hittedComponentLowestDx, hittedComponentLowestDxIndex] = []
					for (let i = 0; i < hittedComponents.length; i++) {
						const hittedComponent = hittedComponents[i]
						let dx = Math.abs((this.posx + this.width / 2) - (hittedComponent.posx + hittedComponent.width / 2))
						if (i == 0) {
							hittedComponentLowestDx = dx
							hittedComponentLowestDxIndex = 0
						}
						if (hittedComponentLowestDx > dx) {
							hittedComponentLowestDx = dx
							hittedComponentLowestDxIndex = i 
						}
						if (i == hittedComponents.length - 1) {
							const component = hittedComponents[hittedComponentLowestDxIndex]
							console.log(component.componentIdentifier)
							component.hit(scene)
							if (component.coinBoxIdentifier != undefined) {
								if (scene.getBindedComponent(component.coinBoxIdentifier) != undefined) {
									const [coinBonusComponent, coinBonusComponentIdentifier] = [new CoinBonusComponent, `cbc${randomizeNumber()}`]
									scene.unbindComponentForAnimation(component.coinBoxIdentifier)
									scene.unbindComponent(component.coinBoxIdentifier)
									coinBonusComponent.init(component.posx, component.posy, component.width, component.height)
									scene.bindComponent(coinBonusComponent, coinBonusComponentIdentifier)
									scene.bindComponentForAnimation(coinBonusComponentIdentifier)
								}
							}
							if (!component.solid) {
								const [collisions, NPCPREFIXRE] = [Collision.detect(scene.getAllBindings(), component).collisions, /^npc\-/]
								for (let i = 0; i < collisions.length; i++) {
									const componentIdentifier = collisions[i].componentIdentifier
									const component = scene.getBindedComponent(componentIdentifier)
									const [isNPC, isBonusNPC] = [NPCPREFIXRE.test(componentIdentifier), component.bonusComponent == true]
									if (isNPC) component.hit()
									else if (isBonusNPC) component.bump()
								}
							}
						}
					}
				}
				return false
			}
		}
	}

	processCollisionWithComponents(scene, collisions) {

		if (!collisions) collisions = Collision.detect(scene.getAllBindings(), this)

		const processCollisionWithNPC = () => {
			const {TTYPE, BTYPE, LTYPE, RTYPE} = collisions
			const NPCPREFIXRE = /^(npc\-)/
			const NPCcollisions = collisions.collisions.filter(collision => NPCPREFIXRE.test(collision.componentIdentifier))
			const die = 0 < NPCcollisions.filter(collision => collision.collisionType == BTYPE || collision.collisionType == LTYPE || collision.collisionType == RTYPE).length
			const stomps = NPCcollisions.filter(collision => collision.collisionType == TTYPE)
			const stompsSomeone = 0 < stomps.length
			const collidesNPC = die || stompsSomeone
			
			if (die) this.die(scene, true, true)
			else if (stompsSomeone) {
				let scoreValue = 0
				stomps.forEach(collision => {
					const npccomponent = scene.getBindedComponent(collision.componentIdentifier)
					scoreValue = scoreValue + npccomponent.scoreValue
					npccomponent.stomp()
				})
				this.collideNPC(scene, scoreValue)
			}
			return collidesNPC
		}
		const processCollisionWithBonus = () => {
			const BONUSPREFIXESRE = /^(cbc|mushroom\-)/
			const bonusCollisionIdentifiers = collisions.collisions.filter(collision => BONUSPREFIXESRE.test(collision.componentIdentifier)).map(collision => collision.componentIdentifier)
			let collidesBonus = false
			if (0 < bonusCollisionIdentifiers.length) {
				collidesBonus = true
				this.collideBonus(scene, bonusCollisionIdentifiers)
			}
			return collidesBonus
		}
		const processCollisionWithFlagpoleStick = () => {
			const [FLAGPOLESTICKRE, FLAGPOLESTICKIDENTIFIER, FLAGPOLEFLAGIDENTIFIER] = [/^flagpole\-stick$/, 'flagpole-stick', 'flagpole-flag']
			const collidesFlagpoleStick = 0 < collisions.collisions.filter(collision => FLAGPOLESTICKRE.test(collision.componentIdentifier)).length
			if (collidesFlagpoleStick && !this.flagpoleStickAnimationCompleted) {
				this.achieveFlagpole(scene, scene.getBindedComponent(FLAGPOLESTICKIDENTIFIER), scene.getBindedComponent(FLAGPOLEFLAGIDENTIFIER))
			}
			return collidesFlagpoleStick
		}
		const processCollisionWithControlPoint = () => {
			const CONTROLPOINTRE = /^(controlpoint)/
			const controlPointCollisions = collisions.collisions.filter(collision => CONTROLPOINTRE.test(collision.componentIdentifier))
			const collidesControlPoint = 1 == controlPointCollisions.length
			if (collidesControlPoint) {
				const controlPoint = scene.getBindedComponent(controlPointCollisions[0].componentIdentifier)
				if (controlPoint.controlPointType == ControlPointComponent.TYPES.CASTLEENTRY) {
					this.alpha = 0
					SFX.remainingTimeToPoints.play()
					Control.clear()
					const timeBeforeConversion = Stat.currentTime
					Stat.conventRemainingTimeToPoints(scene, () => {
						const castleContainerIdentifier = 'container-castle'
						const castleContainer = scene.getBindedComponent(castleContainerIdentifier)
						castleContainer.launchAnimation(scene, timeBeforeConversion, () => {
							const DELAY = 3000
							Stat.nextWorld()
							after(DELAY, () => Display.I1(scene))
						})
						SFX.remainingTimeToPoints.stop()
					})
				}
				else if (controlPoint.controlPointType == ControlPointComponent.TYPES.WARPZONE) {
					const [components, warpzoneTextRE] = [scene.getAllBindings(), /^(warpzone\-text\-(\d+))$/]
					for (let i = 0; i < components.length; i++) {
						const container = components[i].component
						if (warpzoneTextRE.test(container.componentIdentifier)) {
							entries(container._components).forEach(entry => entry[1].alpha = 1)
						}
					}
				}
			}
			return collidesControlPoint
		}
		const processCollisionWithPlatform = () => {
			const platformPiecePrefixIDRE = /^(platform\-piece\-)/
			let collidesPlatformPiece = false
			let platformPieceID = undefined
			for (let i = 0; i < collisions.collisions.length; i++) {
				let collision = collisions.collisions[i]
				if (platformPiecePrefixIDRE.test(collision.componentIdentifier) && collision.collisionType == collisions.TTYPE) {
					collidesPlatformPiece = true
					platformPieceID = collision.componentIdentifier
					break
				}
			} 
			if (collidesPlatformPiece) {
				this.achievePlatform(scene, platformPieceID)
			}
			return collidesPlatformPiece
		}

		const collidesNPC = processCollisionWithNPC()
		if (collidesNPC) return true
		
		const collidesBonus = processCollisionWithBonus()
		if (collidesBonus) return true

		const collidesFlagpoleStick = processCollisionWithFlagpoleStick()
		if (collidesFlagpoleStick) return true

		const collidesControlPoint = processCollisionWithControlPoint()
		if (collidesControlPoint) return true

		const collidesPlatform = processCollisionWithPlatform()
		if (collidesPlatform) return false
	}
	
	collideBonus(scene, bonusIdentifiers) {
		const [pointsPerCoin] = [200]
		bonusIdentifiers.forEach(identifier => {
			const [COINPREFIX, MUSHROOMPREFIX] = [/^(cbc)/, /^(mushroom\-)/]
			if (COINPREFIX.test(identifier)) {
				if (SFX.coin.playing()) SFX.coin.stop()
				scene.unbindComponent(identifier)
				scene.unbindComponentForAnimation(identifier)
				Stat.coins(scene, 1)
				Stat.score(scene, pointsPerCoin)
				SFX.coin.play()
			}
			else if (MUSHROOMPREFIX.test(identifier)) { scene.getBindedComponent(identifier).take() }
		})
	}

	collideNPC(scene, score) {
		this.collidedNPC = true
		this.completedUp = false
		SFX.squish.play()
		Stat.score(scene, score)
		bindGraphicalTextContainer(undefined, scene, `${score}`, this.posx + 10, this.posy - 30, 1.4, 600, 35, 1)
	}

	gravitate(scene) {
		this.posy = this.posy + this.movement.DY
		return this.underScene()
	}

	animate(time, scene) {
		const completePenetration = (animationType, delay) => {
			delete this._penetrationAnimationInitialized
			delete this._initposy
			delete this._inittime
			scene.unbindComponent(this.componentIdentifier)
			after(delay, () => {
				Music.stopBackgroundMusic()
				Display.I5(scene, this.pipe.out)
			})
		}
		const {DIE, IPENETRATE, LPENETRATE, FROMPIPE, ALONGFLAGPOLESTICK} = this.animationTypes
		switch (this.animationType) {
			case DIE: {
				const [N0, N1, di2, di3] = [400, 400, 'di2', 'di3']
				if (delay(di2, this, time, N0)) return false
				if (delay(di3, this, time, N1)) {
					this.posy = this.posy - (this.movement.DY - 2)
				}
				else {
					const ifUnderScene = this.gravitate(scene)
					if (ifUnderScene) {
						const completeAnimationMethodCreated = '_completeAnimation' in this
						delay.clear(di2, this)
						delay.clear(di3, this)
						if (completeAnimationMethodCreated) this._completeAnimation()
						return true
					}
				}
				break
			}
			case IPENETRATE: {
				if (!this._penetrationAnimationInitialized) {
					this._penetrationAnimationInitialized = true;
					[this._initposy, this._inittime] = [this.posy, time]
				}
				const [FRI, DELAY, inittime, initposy, duration, dy] = [3, 350, this._inittime, this._initposy, 500, this.height + 2]
				const DURATIONINDEX = this.getDurationIndex(time, inittime, duration)
				this.posy = initposy + dy * DURATIONINDEX
				this.specifyFrameRunning(FRI, this.direction)
	 			
	 			if (DURATIONINDEX == 1) {
	 				completePenetration(IPENETRATE, DELAY)
	 				return true
	 			}
				break
			}
			case LPENETRATE: {
				const [DX, FRI, PIPEPOSX, DELAY] = [this.movement.DX / 7, 5, this.pipe.posx + 10, 550]
				this.posx = this.posx + DX
				this.specifyFrameRunning(FRI, this.direction)

				if (this.posx > PIPEPOSX) {
					completePenetration(LPENETRATE, DELAY)
	 				return true
				}
				break
			}
			case FROMPIPE: {
				const [delayIdentifier, delayValue] = ['di1', 1800]
				if (delay(delayIdentifier, this, time, delayValue)) return false

				if (!this._animationInitialized) {
					this._animationInitialized = true;
					[this._initposy, this._inittime, this._dy] = [this.posy, time, (this.posy - this.pipe.posy) + this.height]
				}
				const [inittime, initposy, duration, dy] = [this._inittime, this._initposy, 500, this._dy]
				const DURATIONINDEX = this.getDurationIndex(time, inittime, duration)
				this.posy = initposy - dy * DURATIONINDEX
				const completeAnimationMethodCreated = '_completeAnimation' in this
				if (DURATIONINDEX == 1) {
					delay.clear(delayIdentifier, this)
					this.posy = this.pipe.posy - this.height
					delete this._animationInitialized
					delete this.pipe
					delete this._dy
					delete this._initposy
					delete this._inittime
					if (completeAnimationMethodCreated) this._completeAnimation()
					return true
				}
				break
			}
			case ALONGFLAGPOLESTICK: {
				const [DY, stickOffset, MAXFRAMEINDEX, DELAY] = [this.movement.FLAGPOLEDY, 10, 5, 300]
				const {stick, flag} = this.flagpole
				const stickTerminalPosition = stick.posy + stick.height - stickOffset
				const completeAnimationMethodCreated = '_completeAnimation' in this
				const renderNextSprite = (this.currentClimbingFrameIndex = ++this.currentClimbingFrameIndex % MAXFRAMEINDEX) == 0
				const playerAnimationComplete = this.posy + this.height >= stickTerminalPosition

				if (renderNextSprite) {
					if (this.currentClimbingSpriteIndex == 0) this.currentClimbingSpriteIndex = 1
					else if (this.currentClimbingSpriteIndex == 1) this.currentClimbingSpriteIndex = 0
					this.climb(this.direction)
				}
				if (playerAnimationComplete) {
					this.posy = stickTerminalPosition - this.height
					return true
				}
				else this.posy = this.posy + DY

				if (!this._animationInitialized) {
					this._animationInitialized = true
					const flagpoleContainerIdentifier = 'container-flagpole'
					const flagpoleContainer = scene.getBindedComponent(flagpoleContainerIdentifier)
					const definePointsAmount = () => {
						const points = [100, 400, 800, 2000, 5000]
						const [playerBottomPosition, flagBottomPosition, FH] = [this.posy + this.height, stick.posy + flag.height + 12, flag.height]
						if (playerBottomPosition <= flagBottomPosition) return points[4]
						else if (playerBottomPosition <= flagBottomPosition + FH * 3) return points[3]
						else if (playerBottomPosition <= flagBottomPosition + FH * 3 + FH) return points[2]
						else if (playerBottomPosition <= flagBottomPosition + FH * 3 + FH + FH * 3) return points[1]
						else if (playerBottomPosition <= flagBottomPosition + FH * 3 + FH + FH * 3 + FH) return points[0]
					}
					this._pointsAmount = definePointsAmount()
					flagpoleContainer.launchAnimation(scene, this._pointsAmount, () => {
						this.currentClimbingFrameIndex = this.currentClimbingSpriteIndex = 0
						this.climb(this.direction == 1 ? 0 : 1)
						this.posx = (stick.posx + stick.width) - 5
						Stat.score(scene, this._pointsAmount)
						delete this.flagpole
						delete this._pointsAmount
						delete this._animationInitialized
						after(DELAY, () => { if (completeAnimationMethodCreated) this._completeAnimation() })
						scene.unbindComponentForAnimation(this.componentIdentifier)
					})
				}
				break
			}
		}
	}
	
	die(scene, shouldAnimate, playSFX) {
		
		this.animationType = this.animationTypes.DIE
		this.specifyDying()
		this.died = true
		this.width = this.defaultWidth
		this.height = this.defaultHeight
		Stat.freezeTime(scene)
		Music.stopBackgroundMusic()
		
		const containerNPCRE = /^container\-npc/
		const componentsForAnimation = scene.getBindedComponentsForAnimation()
		let i = -1
		while (++i < componentsForAnimation.length) {
			const componentIdentifier = componentsForAnimation[i]
			if (containerNPCRE.test(componentIdentifier)) {
				scene.unbindComponentForAnimation(componentIdentifier)
				i = i - 1
			}
		}
		
		const defineDeathType = scene => {
			const displayTypes = ['I1', 'I2', 'I3']
			const delay = 3000
			const display = type => after(delay, () => {
				if (type == displayTypes[0]) Display[type](scene, false)
				else {
					SFX.gameover.play()
					Display[type](scene)
				}
			})
			if (Stat.timeSpent()) display(displayTypes[1])
			else {
				Stat.lives(scene, -1)
				if (Stat.livesSpent()) display(displayTypes[2])
				else display(displayTypes[0])
			}
		}

		if (playSFX) SFX.die.play()

		if (shouldAnimate) {
			scene.bindComponentForAnimation(this.componentIdentifier)
			this._completeAnimation = () => defineDeathType(scene)
		}
		else defineDeathType(scene)
	}

	tryPenetrate(time, components, scene, control) {
		const [IPIPERE, LPIPERE] = [/^(pbc)\d+$/i, /^(pbc)\d+p1$/i]
		const {DIRECTIONRIGHT, DOWNPRESSED} = control
		if (!this._pipes) {
			const components = scene.getAllBindings()
			this._pipes = components.filter(wrappedComponent => {
				const {componentIdentifier, component} = wrappedComponent
				const {penetrationAllowed} = component
				return penetrationAllowed && (IPIPERE.test(componentIdentifier) || LPIPERE.test(componentIdentifier))
			}).map(component => component.component)
		}
		if (!this.movingY && (DIRECTIONRIGHT || DOWNPRESSED)) {
			const [IPIPETYPE, LPIPETYPE] = ['I', 'L'];
			const penetrate = (pipe, animationType) => {
				[this.pipe, this.animationType, this.penetrating] = [pipe, animationType, true];
				Stat.freezeTime(scene)
				SFX.warp.play()
				scene.bindComponentForAnimation(this.componentIdentifier)
				scene.zindex(this.componentIdentifier, pipe.componentIdentifier)
				delete this._pipes
			}
			const acceptableBoundaries = (pipe, pipeType, player, dx = 3) => {
				const p8 = number => precision(number, 8)
				if (pipeType == IPIPETYPE) return p8(player.posx) > p8(pipe.posx + dx) && p8(player.posx + player.width) < p8(pipe.posx + pipe.width - dx) && p8(player.posy + player.height) >= p8(pipe.posy)
				if (pipeType == LPIPETYPE) return p8(player.posx + player.width) >= p8(pipe.posx) && p8(player.posx) < p8(pipe.posx + pipe.width) && p8(player.posy) >= p8(pipe.posy) && p8(player.posy) < p8(pipe.posy + pipe.height)
			}
			for (let i = 0; i < this._pipes.length; i++) {
				const pipe = this._pipes[i]
				const [IPIPE, LPIPE] = [IPIPERE.test(pipe.componentIdentifier), LPIPERE.test(pipe.componentIdentifier)]
				if (DIRECTIONRIGHT && LPIPE && acceptableBoundaries(pipe, LPIPETYPE, this)) {
					return penetrate(pipe, this.animationTypes.LPENETRATE)
				}
				else if (DOWNPRESSED && IPIPE && acceptableBoundaries(pipe, IPIPETYPE, this)) {
					console.log(true)
					return penetrate(pipe, this.animationTypes.IPENETRATE)
				}
			}
		}
	}

	moveFromPipe(scene, pipe, complete) {
		[this.animationType, this.movingFromPipe, this.pipe] = [this.animationTypes.FROMPIPE, true, pipe];
		const dy = 10
		this.posx = pipe.posx + pipe.width / 2 - this.width / 2
		this.posy = pipe.posy + dy
		scene.zindex(this.componentIdentifier, pipe.componentIdentifier)
		scene.bindComponentForAnimation(this.componentIdentifier)
		this._completeAnimation = () => {
			this.movingFromPipe = false
			Collision.updateComponentInLastPXPYWHMap(this.componentIdentifier, this)
			complete()
		}
	}

	achieveFlagpole(scene, stick, flag) {
		[this.animationType, this.movingAlongFlagpoleStick, this.flagpole] = [this.animationTypes.ALONGFLAGPOLESTICK, true, {stick, flag}];
		this.climb(this.direction)
		this.posx = (stick.posx - this.width) + 5
		this.clearMoveYProperties()
		scene.zindex(flag.componentIdentifier, this.componentIdentifier)
		scene.bindComponentForAnimation(this.componentIdentifier)
		Music.stopBackgroundMusic()
		SFX.flagpole.play()
		Stat.freezeTime(scene)
		Control.clear()
		this._completeAnimation = () => {
			this.movingAlongFlagpoleStick = false
			this.flagpoleStickAnimationCompleted = true
			const {SLUGGISHRUNNING} = this.movement.modes
			this.movement.mode = SLUGGISHRUNNING
			SFX.areaclear.play()
			Control.DIRECTIONRIGHT = true
		}
	} 

	achievePlatform(scene, platformPieceID) { [this.achievedPlatform, this.achievedPlatformPieceID] = [true, platformPieceID] }

	moveWithAchievedPlatform(scene, platformPieces, dy) {
		if (!this.died && this.achievedPlatform && this.achievedPlatformPieceID in platformPieces) {
			this.posy = this.posy + dy
			if (this.underScene() || this.aboveScene()) this.die(scene, false, true)
		}
	}

	control(passedTime, components, scene, control) {
		const terminate = () => this.died || this.penetrating || this.movingFromPipe || this.movingAlongFlagpoleStick
		if (terminate()) return false
		if (control.DIRECTIONLEFT) {
			this.moveX(passedTime, 1, components, scene, control)
		}
		else if (control.DIRECTIONRIGHT) {
			this.moveX(passedTime, 0, components, scene, control)
		}
		else this.stand(this.direction)
		if (terminate()) return false
		if (control.DIRECTIONDOWN) {
			if (this.moveY(passedTime, false, components, scene, control)) control.DIRECTIONDOWN = control.DIRECTIONUPDOWN = false
		}
		else if (control.DIRECTIONUPDOWN) {
			if (this.moveY(passedTime, true, components, scene, control)) control.DIRECTIONUPDOWN = false
		}
		this.tryPenetrate(passedTime, components, scene, control)
	}
}