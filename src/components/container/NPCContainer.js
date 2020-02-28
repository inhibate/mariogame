
import {CANVASSCENEW} from '../../misc'

let instance = undefined

export default class NPCContainer {
	
	static instance() { return instance }

	constructor(npcs = {}) {
		const {entries} = Object
		this._components = npcs
		this.componentIdentifier = `container-npc`
		this.npcs = entries(npcs).map(array => array[1])
		instance = this
	}

	pushNPC(npc) { this.npcs[this.npcs.length] = npc }

	animate(time, scene) {

		const npcs = this.npcs

		const ifActive = (npccomponent, callback) => {
			let active = npccomponent.active
			if (!active) if (CANVASSCENEW + 10 >= npccomponent.posx) npccomponent.active = active = true
			if (active) callback()
		}
		
		npcs.forEach(npccomponent => ifActive(npccomponent, () => npccomponent.moveX(npccomponent.direction == 1 ? npccomponent.dx : -npccomponent.dx)))
		npcs.forEach(npccomponent => ifActive(npccomponent, () => npccomponent.animate(time, scene)))
		npcs.forEach(npccomponent => ifActive(npccomponent, () => npccomponent.lookForActions(scene)))
		
		this.removeNPCIfRequired(scene)
	}

	removeNPCIfRequired(scene) {
		const npcs = this.npcs
		for (let i = 0; i < npcs.length; i++) {
			const [npc, npcID] = [npcs[i], npcs[i].componentIdentifier]
			if (npc._shouldBeRemoved) {
				npcs.splice(i--, 1)
				scene.unbindComponent(npcID)
			}
		}
	}
}