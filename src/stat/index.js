

import {EMPTYCHAR, CANVASSCENEW, CANVASSCENEH} from '../misc'
import CoinstatBoxComponent from '../components/CoinstatBoxComponent'
import CanvasComponent from '../canvasComponent'
import PlayerBoxComponent from '../components/PlayerBoxComponent'
import GraphicalTextContainer from '../components/container/GraphicalTextContainer'

import {SFX, Music} from '../sound'

const {keys} = Object

class Stat {
	
	static _zeroPrefixes(value, digits) {
		let repeatNumber = 0
		const zeroPrefix = '0'
		const valueLength = String(value).length
		if (value == 0) {
			value = EMPTYCHAR
			repeatNumber = digits
		}
		else if (digits - valueLength < 0) repeatNumber = 0
		else repeatNumber = digits - valueLength
		return `${zeroPrefix.repeat(repeatNumber)}${value}`
	}

	static clear(scene, identifiers) { if (identifiers) identifiers.forEach(identifier => scene.unbindComponent(identifier)) }

	static lives(scene, lives) { this.currentLives = this.currentLives + lives }
	
	static livesSpent() { return this.currentLives == 0 }

	static timeSpent() { return this.currentTime == 0 }

	static time100() { return this.currentTime == 100 }

	static default() {
		const defaults = this.parameters.defaults;
		[this.scoreValue, this.coinsAmount, this.currentLives, this.currentWorld, this.currentTime] = [defaults.score, defaults.coins, defaults.lives, defaults.world, defaults.time];
		return this
	}

	static time(scene, time, animate) {
		this.currentTime = time
		const {X1, Y1, SIZE} = this.parameters
		const containerInstance = new GraphicalTextContainer(this._zeroPrefixes(this.currentTime, 3), 510 + X1, 26 + Y1, SIZE)
		this.clear(scene, this._timeIdentifiers)
		this._timeIdentifiers = keys(containerInstance._components)
		scene.bindComponent(containerInstance)
		if (animate) {
			scene.bindComponent(this, this.identifier)
			scene.bindComponentForAnimation(this.identifier)
		}
	}
	
	static world(scene, world) {
		this.currentWorld = world
		const identifiers = containerInstance => keys(containerInstance._components)
		const {X1, Y1, SIZE} = this.parameters
		const containerInstance1 = new GraphicalTextContainer(String(this.currentWorld).charAt(0), 370 + X1, 26 + Y1, SIZE)
		const containerInstance2 = new GraphicalTextContainer(String(this.currentWorld).charAt(1), 400 + X1, 26 + Y1, SIZE)
		this.clear(scene, this._worldIdentifiers)
		this._worldIdentifiers = [...identifiers(containerInstance1), ...identifiers(containerInstance2)]
		scene.bindComponent(containerInstance1)
		scene.bindComponent(containerInstance2)
	}

	static score(scene, add) {
		this.scoreValue = this.scoreValue + add
		const {X1, Y1, SIZE} = this.parameters
		const containerInstance = new GraphicalTextContainer(this._zeroPrefixes(this.scoreValue, 6), 50 + X1, 26 + Y1, SIZE)
		this.clear(scene, this._scoreIdentifiers)
		this._scoreIdentifiers = keys(containerInstance._components)
		scene.bindComponent(containerInstance)
	}

	static coins(scene, add) {
		this.coinsAmount = this.coinsAmount + add
		const {X1, Y1, SIZE} = this.parameters
		const containerInstance = new GraphicalTextContainer(this._zeroPrefixes(this.coinsAmount, 2), 240 + X1, 26 + Y1, SIZE)
		this.clear(scene, this._coinsIdentifiers)
		this._coinsIdentifiers = keys(containerInstance._components)
		scene.bindComponent(containerInstance)
	}
	
	static display(scene, displayBlackBackground, displayTime, displayLives) {
		const [coinstatIdentifier, BGIdentifier, BGC, PlayerBoxIdentifier, TXDASH, TXCROSS, TXMARIO, TXWORLD, TXTIME] = ['coinstat', 'bg', '#000', 'playerbox', '-', '\u00D7', 'MARIO', 'WORLD', 'TIME']
		const {X1, Y1, X2, Y2, SIZE} = this.parameters 
		
		if (displayBlackBackground) scene.bindComponent(new CanvasComponent(CANVASSCENEW, CANVASSCENEH, BGC, 0, 0), BGIdentifier)
		
		if (!displayBlackBackground) scene.bindComponentForAnimation(coinstatIdentifier)
		
		scene.bindComponent(new CoinstatBoxComponent(200 + X1, 26 + Y1, true, false), coinstatIdentifier)

		scene.bindComponent(new GraphicalTextContainer(TXDASH, 387 + X1, 33 + Y1, SIZE))
		scene.bindComponent(new GraphicalTextContainer(TXCROSS, 222 + X1, 30 + Y1, SIZE))
		scene.bindComponent(new GraphicalTextContainer(TXMARIO, 50 + X1, 10 + Y1, SIZE))
		scene.bindComponent(new GraphicalTextContainer(TXWORLD, 358 + X1, 10 + Y1, SIZE))
		scene.bindComponent(new GraphicalTextContainer(TXTIME, 500 + X1, 10 + Y1, SIZE))
		this.score(scene, 0)
		this.coins(scene, 0)
		this.world(scene, this.currentWorld)
		
		if (displayTime) this.time(scene, this.currentTime, true)

		if (displayLives) {
			scene.bindComponent(new GraphicalTextContainer(TXWORLD, 270 + X2, 150 + Y2, SIZE))
			scene.bindComponent(new GraphicalTextContainer(String(this.currentWorld).charAt(0), 365 + X2, 150 + Y2, SIZE))
			scene.bindComponent(new GraphicalTextContainer(TXDASH, 382 + X2, 157 + Y2, SIZE))
			scene.bindComponent(new GraphicalTextContainer(String(this.currentWorld).charAt(1), 395 + X2, 150 + Y2, SIZE))
			scene.bindComponent(new PlayerBoxComponent(280 + X2, 195 + Y2), PlayerBoxIdentifier)
			scene.bindComponent(new GraphicalTextContainer(TXCROSS, 340 + X2, 212 + Y2, SIZE))
			scene.bindComponent(new GraphicalTextContainer(`${this.currentLives}`, 382 + X2, 208 + Y2, SIZE))
		}
	}

	static animate(time, scene) {
		const animationParameters = this.parameters.animation
		const playerComponentIdentifier = 'player'

		if ((++animationParameters.frameIndex % animationParameters.MAXFRAMEINDEX) == 0) {
			animationParameters.frameIndex = 0
			this.time(scene, this.currentTime - 1)
			if (this.time100()) {
				Music.warning()
			}
			else if (this.timeSpent()) {
				scene.getBindedComponent(playerComponentIdentifier).die(scene, true, true)
			}
		}
	}

	static freezeTime(scene) { scene.unbindComponentForAnimation(this.identifier) }
}

Stat.identifier = 'statclass'
Stat.parameters = {X1: 60, Y1: 22, X2: 15, Y2: 40, SIZE: 2, animation: {frameIndex: 0, MAXFRAMEINDEX: 24}}
Stat.parameters.defaults = {score: 0, coins: 0, lives: 3, world: 11, time: 400}

export default Stat.default()