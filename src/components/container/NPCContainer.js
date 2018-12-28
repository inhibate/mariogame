
import {randomizeNumber} from '../../misc'

export default class NPCContainer {
	
	constructor(npcs = {}) {
		this.componentIdentifier = `container-npc${randomizeNumber()}`
		this._components = npcs
	}

	animate(time, scene) {
		const NPCPREFIXRE = /^(npc\-)/
		const {entries} = Object
		const npcs = scene.getAllBindings().filter(component => NPCPREFIXRE.test(component.componentIdentifier)).map(component => component.component)
		
		npcs.forEach(npccomponent => {
			if (npccomponent.state !== undefined) {
				if (npccomponent.state != npccomponent.states.STOMPED) {
					npccomponent.moveX(npccomponent.direction == 1 ? npccomponent.dx : -npccomponent.dx)
				}
			}
		})
		npcs.forEach(npccomponent => npccomponent.animate(time, scene))
	}

}