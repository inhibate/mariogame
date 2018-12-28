
import {CANVASSCENEW, isNumber, isRegularExpression} from '../misc'

export default class Collision {
	
	static DeleteLastPXPYWHMap() { delete Collision.LastPXPYWHMap }

	static UpdateLastPXPYWHMap(components) {
		// [{componentIdentifier, posx, posy, width, height}, {componentIdentifier, posx, posy, width, height}]
		if (!Collision.LastPXPYWHMap) {
			Collision.LastPXPYWHMap = []
			for (let p = 0; p < components.length; p++) {
				const [component, componentIdentifier] = [components[p].component, components[p].componentIdentifier]
				const {posx, posy, width, height} = component
				Collision.LastPXPYWHMap[Collision.LastPXPYWHMap.length] = {componentIdentifier, posx, posy, width, height}
			}
		}
		else {
			// Change existing
			for(let p = 0; p < components.length; p++) {
				const [component, componentIdentifier] = [components[p].component, components[p].componentIdentifier]
				const {posx, posy, width, height} = component
				let componentExist = false
				for (let q = 0; q < Collision.LastPXPYWHMap.length; q++) {
					const existingComponent = Collision.LastPXPYWHMap[q]
					if (componentIdentifier == existingComponent.componentIdentifier) {
						existingComponent.posx = posx
						existingComponent.posy = posy
						existingComponent.width = width
						existingComponent.height = height
						componentExist = true
						break
					}
				}
				// Add new
				if (!componentExist) Collision.LastPXPYWHMap[Collision.LastPXPYWHMap.length] = {componentIdentifier, posx, posy, width, height}
			}

			// Remove irrelevant
			for (let q = 0; q < Collision.LastPXPYWHMap.length; q++) {
				const componentIdentifier = Collision.LastPXPYWHMap[q].componentIdentifier
				let shouldRemove = true
				for(let p = 0; p < components.length; p++) {
					if (componentIdentifier == components[p].componentIdentifier) {
						shouldRemove = false
						break
					}
				}
				if (shouldRemove) Collision.LastPXPYWHMap.splice(q--, 1)
			}
		}
		return Collision.LastPXPYWHMap
	}

	static detect(components, component, omission) {

		const throwNewTypeError = property => { throw new TypeError(`Cannot detect collision. ${property} should be primitive-number`) }
		const isOmissionRegularExpression = isRegularExpression(omission)
		const {posx, posy, width, height, componentIdentifier} = component
		const [collisions, types, TTYPE, BTYPE, LTYPE, RTYPE] = [new Array, new Array, 'T', 'B', 'L', 'R']
		const [NPCPREFIXRE, OMISSIONS] = [/^(?:npc\-)/, RegExp(`^(?:(?:${componentIdentifier})|(?:bg))$`)]
		const NPC = NPCPREFIXRE.test(componentIdentifier)
		const _componentIdentifier = componentIdentifier

		const first = type => { for (let q = 0; q < collisions.length; q++) if (collisions[q].collisionType == type) return collisions[q] }
		
		const collisionPush = (componentIdentifier, collisionType, collisionOffset) => {
			if (false == types.includes(collisionType)) {
				types.push(collisionType)
			}
			collisions.push({componentIdentifier, collisionType, collisionOffset})
		}

		if (false == isNumber(posx)) throwNewTypeError('posx')
		if (false == isNumber(posy)) throwNewTypeError('posy')
		if (false == isNumber(width)) throwNewTypeError('width')
		if (false == isNumber(height)) throwNewTypeError('height')

		for (let q = 0; q < components.length; q++) {

			const [component, componentIdentifier] = [components[q].component, components[q].componentIdentifier]
			const OUTOFSCREEN = component.posx > CANVASSCENEW || component.posx + component.width < 0

			const skip = (isOmissionRegularExpression && omission.test(componentIdentifier)) || !NPC && OUTOFSCREEN || !component.collidable || OMISSIONS.test(componentIdentifier)
			if (skip) continue

			if (posx + width > component.posx && posx < component.posx + component.width && posy + height >= component.posy && posy <= component.posy + component.height) {
				let [prevComponentData1, prevComponentData2] = []
				for (let p = 0; p < Collision.LastPXPYWHMap.length; p++) {
					const prevComponentData = Collision.LastPXPYWHMap[p]
					if (prevComponentData1 && prevComponentData2) break
					if (prevComponentData.componentIdentifier == _componentIdentifier) prevComponentData1 = prevComponentData
					if (prevComponentData.componentIdentifier == componentIdentifier) prevComponentData2 = prevComponentData
				}
				const isTypeT = prevComponentData1.posy + prevComponentData1.height <= prevComponentData2.posy
				const isTypeB = prevComponentData1.posy >= prevComponentData2.posy + prevComponentData2.height
				const isTypeL = prevComponentData1.posx + prevComponentData1.width <= prevComponentData2.posx
				const isTypeR = prevComponentData1.posx >= prevComponentData2.posx + prevComponentData2.width
				if (isTypeT) {
					collisionPush(componentIdentifier, TTYPE, component.posy - (posy + height))
				}
				else if (isTypeB) {
					collisionPush(componentIdentifier, BTYPE, posy - (component.posy + component.height))
				}
				else if (isTypeL) {
					collisionPush(componentIdentifier, LTYPE, component.posx - (posx + width))
				}
				else if (isTypeR) {
					collisionPush(componentIdentifier, RTYPE, (component.posx + component.width) - posx)
				}
			}
		}
		return {collisions, types, first, TTYPE, BTYPE, LTYPE, RTYPE}
	}

}