

import {EMPTYCHAR, CANVASSCENEW, CANVASSCENEH} from '../misc'
import CanvasComponent from '../canvasComponent'
import PlayerBoxComponent from '../components/PlayerBoxComponent'
import GraphicalTextContainer from '../components/container/GraphicalTextContainer'

const {keys} = Object

class Stat {
	
	static clear(scene, identifiers) { if (identifiers) identifiers.forEach(identifier => scene.unbindComponent(identifier)) }

	static default() {
		const defaults = this.parameters.defaults;
		[this.scoreValue, this.coinsAmount, this.currentLives, this.currentWorld, this.currentTime] = [defaults.score, defaults.coins, defaults.lives, defaults.world, defaults.time]
		return this
	}

	static lives(scene, lives) { this.currentLives = this.currentLives + lives }

	static time(scene, time) {
		this.currentTime = time
		const {X1, Y1, SIZE} = this.parameters
		const containerInstance = new GraphicalTextContainer(`${this.currentTime}`, 510 + X1, 26 + Y1, SIZE)
		this.clear(scene, this._timeIdentifiers)
		this._timeIdentifiers = keys(containerInstance._components)
		scene.bindComponent(containerInstance)
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
		const TXZERO = '0'
		const {X1, Y1, SIZE} = this.parameters
		const containerInstance = new GraphicalTextContainer(`${TXZERO.repeat(6 - (this.scoreValue == 0 ? 0 : String(this.scoreValue).length))}${this.scoreValue == 0 ? EMPTYCHAR : this.scoreValue}`, 50 + X1, 26 + Y1, SIZE)
		this.clear(scene, this._scoreIdentifiers)
		this._scoreIdentifiers = keys(containerInstance._components)
		scene.bindComponent(containerInstance)
	}

	static coins(scene, add) {
		this.coinsAmount = this.coinsAmount + add
		const {X1, Y1, SIZE} = this.parameters
		const TXZERO = '0'
		const containerInstance = new GraphicalTextContainer(this.coinsAmount < 10 ? `${TXZERO}${this.coinsAmount}` : `${this.coinsAmount}`, 240 + X1, 26 + Y1, SIZE)
		this.clear(scene, this._coinsIdentifiers)
		this._coinsIdentifiers = keys(containerInstance._components)
		scene.bindComponent(containerInstance)
	}
	
	static display(scene, displayBlackBackground, displayTime, displayLives) {
		const [coinInstanceIdentifier, BGIdentifier, BGC, PlayerBoxIdentifier, TXDASH, TXCROSS, TXMARIO, TXWORLD, TXTIME] = ['stat-coin', 'bg', '#000', 'playerbox', '-', '\u00D7', 'MARIO', 'WORLD', 'TIME']
		const {X1, Y1, X2, Y2, SIZE} = this.parameters 
		
		if (displayBlackBackground) scene.bindComponent(new CanvasComponent(CANVASSCENEW, CANVASSCENEH, BGC, 0, 0), BGIdentifier)
		
		const coinInstance = new CanvasComponent(5 * SIZE, 8 * SIZE, CanvasComponent.SPRITES.C, 200 + X1, 26 + Y1, 'sprite', 1, 160, 5, 8)
		coinInstance.unmovable = true
		coinInstance.collidable = false

		scene.bindComponent(coinInstance, coinInstanceIdentifier)
		scene.bindComponent(new GraphicalTextContainer(TXDASH, 385 + X1, 33 + Y1, SIZE))
		scene.bindComponent(new GraphicalTextContainer(TXCROSS, 222 + X1, 30 + Y1, SIZE))
		scene.bindComponent(new GraphicalTextContainer(TXMARIO, 50 + X1, 10 + Y1, SIZE))
		scene.bindComponent(new GraphicalTextContainer(TXWORLD, 358 + X1, 10 + Y1, SIZE))
		scene.bindComponent(new GraphicalTextContainer(TXTIME, 500 + X1, 10 + Y1, SIZE))
		this.score(scene, 0)
		this.coins(scene, 0)
		this.world(scene, this.currentWorld)

		if (displayLives) {
			scene.bindComponent(new GraphicalTextContainer(TXWORLD, 270 + X2, 150 + Y2, SIZE))
			scene.bindComponent(new GraphicalTextContainer(String(this.currentWorld).charAt(0), 365 + X2, 150 + Y2, SIZE))
			scene.bindComponent(new GraphicalTextContainer(TXDASH, 380 + X2, 157 + Y2, SIZE))
			scene.bindComponent(new GraphicalTextContainer(String(this.currentWorld).charAt(1), 395 + X2, 150 + Y2, SIZE))
			scene.bindComponent(new PlayerBoxComponent(280 + X2, 195 + Y2), PlayerBoxIdentifier)
			scene.bindComponent(new GraphicalTextContainer(TXCROSS, 340 + X2, 212 + Y2, SIZE))
			scene.bindComponent(new GraphicalTextContainer(`${this.currentLives}`, 385 + X2, 208 + Y2, SIZE))
		}

		if (displayTime) this.time(scene, this.currentTime)
	}

	static animate() {
		// animate coin & time
		// Stat.time(scene, Stat.currentTime - 1)
	}
}

Stat.parameters = {X1: 60, Y1: 22, X2: 15, Y2: 40, SIZE: 2}
Stat.parameters.defaults = {score: 0, coins: 0, lives: 3, world: 11, time: 400}
Stat.default()
export default Stat