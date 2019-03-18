
import CanvasComponent from '../canvasComponent'
import Stat from '../stat'
import {SFX} from '../sound'

const [firecrackerBoxComponentIdentifier, castleBoxComponentIdentifier, castleFlagBoxComponentIdentifier] = ['firecracker', 'castle', 'castle-flag']

export default class CastleBoxComponent {
	// @type = 0 SMALL
	// @type = 1 BIG
	constructor(posx, posy, type = 0) {
		const [FLAG, FIREWORK, SPRITEC, components] = [0, 1, CanvasComponent.SPRITES.C, {}]
		let CSPRITE, CW, CH;
		[this.bindable, this.animationTypes, this.castleType, this.SPRITEC] = [true, {FLAG, FIREWORK}, type, SPRITEC];
		this.frameIndex = this.firecrackerSpriteMapIndex = this.firecrackersPositionIndex = 0
		this.firecrackerSpriteMap = [[116, 148, 8, 8, 8 * 2, 8 * 2], [114, 161, 12, 14, 12 * 2, 14 * 2], [112, 176, 16, 16, 16 * 2, 16 * 2]]
		this.firecrackerSpriteMapSize = this.firecrackerSpriteMap.length
		if (type == 0) {
			[CSPRITE, CW, CH] = [CanvasComponent.SPRITES.ACASTLE, 160, 160]
			const [CFSPRITE, CFW, CFH, CFSX, CFSY, CFSW, CFSH] = [SPRITEC, 13 * 2, 14 * 2, 129, 2, 13, 14]
			const castleFlagBoxComponent = new CanvasComponent(CFW, CFH, CFSPRITE, posx + CW / 2 - CFW / 2 - 2, posy + 50, 'sprite', CFSX, CFSY, CFSW, CFSH, 1)
			castleFlagBoxComponent.collidable = false
			components[castleFlagBoxComponentIdentifier] = castleFlagBoxComponent
			this.shouldAnimateCastleFlag = true
		}
		if (type == 1) [CSPRITE, CW, CH] = [CanvasComponent.SPRITES.BCASTLE, 144 * 1.5, 176 * 1.5]
		const castleBoxComponent = new CanvasComponent(CW, CH, CSPRITE, posx, posy, 'image')
		castleBoxComponent.collidable = false
		components[castleBoxComponentIdentifier] = castleBoxComponent;
		[this._components, this.CW, this.CH] = [components, CW, CH];
		this.MAXFRAMEINDEX = 15
	}
	
	launchAnimation(scene, time, complete) {
		const {posx, posy} = scene.getBindedComponent(castleBoxComponentIdentifier)
		const {CW, CH} = this
		const [timeLastDigit, dx] = [time % 10, 32]
		if (this.castleType == 0) this.firecrackersPosition = [[posx + dx, (posy - dx * 5) + dx / 2], [posx - dx, posy - dx * 2], [posx + CW, posy - dx * 4], [posx + CW, posy - dx], [posx + dx * 2, posy - dx * 4], [posx - dx, posy - dx * 2]]
		if (this.castleType == 1) this.firecrackersPosition = [[posx + dx * 3, posy + dx + dx / 2], [posx + dx, posy + dx * 4], [posx + dx * 7, posy + dx * 2], [posx + dx * 7, posy + dx * 5], [posx + dx * 4, posy + dx * 2], [posx + dx, posy + dx * 4]]
		if (timeLastDigit == 1 || timeLastDigit == 3 || timeLastDigit == 6) [this.shouldAnimateFirework, this.firecrackersAmount] = [true, timeLastDigit]
		this.completeAnimaton = complete
		scene.bindComponentForAnimation(this.componentIdentifier)
	}

	animate(time, scene) {
		const [castle, flag, flagAnimationDuration] = [this._components[castleBoxComponentIdentifier], this._components[castleFlagBoxComponentIdentifier], 800]
		const {FLAG, FIREWORK} = this.animationTypes
		const completeAnimation = () => {
			scene.unbindComponent(this.componentIdentifier)
			this.completeAnimaton()
			delete this._animationTypeDefined
			return true
		}
		if (!this._animationTypeDefined) {
			this._animationTypeDefined = true
			if (this.shouldAnimateCastleFlag) this.animationType = this.animationTypes.FLAG
			else if (this.shouldAnimateFirework) this.animationType = this.animationTypes.FIREWORK
			else return completeAnimation()
		}
		switch (this.animationType) {
			case FLAG: {
				if (!this._flagAnimationInitialized) {
					[this._inittime, this._initposy, this._dy, this._flagAnimationInitialized] = [time, flag.posy, flag.height + (flag.posy - castle.posy), true]
				}
				let [durationIndex, flagAnimationCompleted] = [(time - this._inittime) / flagAnimationDuration, false]
				if (durationIndex >= 1) {
					durationIndex = 1
					flagAnimationCompleted = true
				}
				flag.posy = this._initposy - this._dy * durationIndex
				if (flagAnimationCompleted) {
					delete this._inittime
					delete this._initposy
					delete this._dy
					delete this._flagAnimationInitialized
					if (this.shouldAnimateFirework) this.animationType = this.animationTypes.FIREWORK
					else return completeAnimation()
				}
				break
			}
			case FIREWORK: {
				const [POINTSPERFIRECRACKER] = [500]
				if (++this.frameIndex == this.MAXFRAMEINDEX) {
					this.MAXFRAMEINDEX = 8
					this.frameIndex = 0
					scene.unbindComponent(firecrackerBoxComponentIdentifier)
					if (this._fireworkAnimationCompleted) {
						this.frameIndex = this.firecrackersPositionIndex = this.firecrackerSpriteMapIndex = 0
						delete this._fireworkAnimationCompleted
						return completeAnimation()
					}
					const FIRECRACKERSPRITE = this.SPRITEC
					const [SX0, SY0, SW0, SH0, W0, H0] = this.firecrackerSpriteMap[0]
					const [POSX, POSY] = this.firecrackersPosition[this.firecrackersPositionIndex]
					let firecrackerComponent = undefined
					if (this.firecrackerSpriteMapIndex == 0) {
						SFX.firework.play()
						firecrackerComponent = new CanvasComponent(W0, H0, FIRECRACKERSPRITE, POSX, POSY, 'sprite', SX0, SY0, SW0, SH0, 1)
					}
					else {
						const [SX, SY, SW, SH, W, H] = this.firecrackerSpriteMap[this.firecrackerSpriteMapIndex]
						firecrackerComponent = new CanvasComponent(W, H, FIRECRACKERSPRITE, POSX - ((W - W0) / 2), POSY - ((H - H0) / 2), 'sprite', SX, SY, SW, SH, 1)
					}
					scene.bindComponent(firecrackerComponent, firecrackerBoxComponentIdentifier)
					scene.zindex(castleBoxComponentIdentifier, firecrackerBoxComponentIdentifier)
					if (++this.firecrackerSpriteMapIndex == this.firecrackerSpriteMapSize) {
						this.MAXFRAMEINDEX = 15
						this.firecrackerSpriteMapIndex = 0
						Stat.score(scene, POINTSPERFIRECRACKER)
						if (++this.firecrackersPositionIndex == this.firecrackersAmount) this._fireworkAnimationCompleted = true
					}
				}
				break
			}
		}
	}
}