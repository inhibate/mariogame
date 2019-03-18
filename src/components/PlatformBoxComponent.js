
import CanvasComponent from '../canvasComponent'
import {CANVASSCENEH, randomizeNumber} from '../misc'
const {entries} = Object

export default class PlatformBoxComponent {
	constructor(posx, posy, size = 1, direction, group, groupOffset) {
		const [SX, SY, SW, SH, W, H, SPRITE, PLATFORMPIECEPREFIX, components] = [64, 128, 16, 8, 16 * 2, 8 * 2, CanvasComponent.SPRITES.C, 'platform-piece-', {}]
		for (let i = 0, ppos = 0; i < size; ++i) {
			components[`${PLATFORMPIECEPREFIX}${randomizeNumber()}`] = new CanvasComponent(W, H, SPRITE, posx + ppos, posy, 'sprite', SX, SY, SW, SH, 1)
			ppos = ppos + W
		}
		[this.bindable, this.direction, this.group, this.groupOffset, this.H, this._components] = [true, direction, group, groupOffset, H, components]
	}
	animate(time, scene) {
		const [DOWN, UP, playerComponentIdentifier] = [this.direction == 0, this.direction == 1, 'player']
		const {group, groupOffset} = this
		const entries_ = entries(this._components)
		const filterPlatformContainers = group => {
			if (!this.platformContainers) {
				const platformContainerIDRE = /^(container\-platform\-(\d+))$/
				this.platformContainers = scene.getAllBindings().filter(componentWrapper => platformContainerIDRE.test(componentWrapper.componentIdentifier))
				.filter(componentWrapper => componentWrapper.component.group == group)
				.map(componentWrapper => componentWrapper.component)
			}
			return this.platformContainers
		}
		const placePlatformContainer = (dy, add = false) => {
			if (!this.playerComponent) this.playerComponent = scene.getBindedComponent(playerComponentIdentifier)
			const {playerComponent} = this
			for (let i = 0; i < entries_.length; i++) {
				if (add == false) entries_[i][1].posy = dy
				if (add != false) entries_[i][1].posy = entries_[i][1].posy + dy
			}
			if (add != false) playerComponent.moveWithAchievedPlatform(scene, this._components, dy)
		}
		let dy = 1.5
		const firstEntryPosy = entries_[0][1].posy
		if (DOWN) {
			if (firstEntryPosy > CANVASSCENEH) {
				const components = filterPlatformContainers(group)
				if (components.length == 1) {
					placePlatformContainer(-this.H)
				}
				else {
					let topContainerPlatformPosy = undefined
					for (let i = 0; i < components.length; i++) {
						const containerPlatformPosy = entries(components[i]._components)[0][1].posy
						if (i == 0) topContainerPlatformPosy = containerPlatformPosy
						else if (topContainerPlatformPosy > containerPlatformPosy) topContainerPlatformPosy = containerPlatformPosy
					}
					placePlatformContainer(topContainerPlatformPosy - groupOffset)
				}
			}
		}
		else if (UP) {
			dy = -dy
			if (firstEntryPosy + this.H < 0) {
				const components = filterPlatformContainers(group)
				if (components.length == 1) {
					placePlatformContainer(CANVASSCENEH)
				}
				else {
					let bottomContainerPlatformPosy = undefined
					for (let i = 0; i < components.length; i++) {
						const containerPlatformPosy = entries(components[i]._components)[0][1].posy
						if (i == 0) bottomContainerPlatformPosy = containerPlatformPosy
						else if (bottomContainerPlatformPosy < containerPlatformPosy) bottomContainerPlatformPosy = containerPlatformPosy
					}
					placePlatformContainer(bottomContainerPlatformPosy + groupOffset)
				}
			}
		}
		placePlatformContainer(dy, true)
	}
}