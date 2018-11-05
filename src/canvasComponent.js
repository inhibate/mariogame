
import {CANVASSCENEW} from './misc/'

export default class CanvasComponent {
	
	constructor(w, h, filling, posx, posy, type, sx, sy, sw, sh) {

		this.type = type
		
		this.posx = posx
		this.posy = posy
		this.width = w
		this.height = h

		this.sx = sx 
		this.sy = sy
		this.sw = sw
		this.sh = sh

		this.lastPosx = posx
		this.lastPosy = posy

		if (type == 'image' || type == 'sprite') {
			this.image = new Image()
			this.src = filling
		}
		else {
			this.filling = filling
		}

	}

	update(canvasContext) {
		if (this.type == 'image') {
			canvasContext.drawImage(this.image, this.posx, this.posy, this.width, this.height)
		}
		else if (this.type == 'sprite') {
			canvasContext.drawImage(this.image, this.sx, this.sy, this.sw, this.sh, this.posx, this.posy, this.width, this.height)
		}
		else {
			canvasContext.fillStyle = this.filling
			canvasContext.fillRect(this.posx, this.posy, this.width, this.height)
		}
	}

	collisions(components, posx, posy, width, height, type) {

		const RE = new RegExp(`^(?:(?:${this.componentIdentifier})|(?:bg))$`)

		const [TTYPE, BTYPE, LTYPE, RTYPE, THROUGHTYPE] = ['T', 'B', 'L', 'R', 'THROUGH']
		const [collisions, types] = [new Array, new Array]

		const collisionAdd = (componentIdentifier, collisionType, collisionOffset) => {
			if (!types.includes(collisionType)) {
				types.push(collisionType)
			}
			collisions.push({componentIdentifier, collisionType, collisionOffset})
		}

		const first = (type) => {
			for (let i = 0; i < collisions.length; i++) if (collisions[i].collisionType == type) return collisions[i]
		}
		
		for (let i = 0; i < components.length; i++) {

			const [component, componentIdentifier] = [components[i].component, components[i].componentIdentifier]
			
			if (RE.test(componentIdentifier) == false) {

				if (component.posx >= CANVASSCENEW || component.posx + component.width < 0) continue

				const collideXT = posx + width > component.posx && posx < component.posx + component.width
				const collideYT = posy + height >= component.posy && posy < component.posy + component.height
				const collideYTCaseThrough = posy + height >= component.posy && posy >= component.posy + component.height
				
				const collideXL = posx + width >= component.posx && posx < component.posx
				const collideYL = posy + height > component.posy && posy < component.posy + component.height
				
				const collideXR = posx <= component.posx + component.width && posx + width > component.posx + component.width
				const collideYR = posy + height > component.posy && posy < component.posy + component.height

				const collideXB = posx + width > component.posx && posx < component.posx + component.width
				const collideYB = posy <= component.posy + component.height && posy + height > component.posy
				const collideYBCaseThrough = posy <= component.posy + component.height && posy + height <= component.posy

				const lastPlayerTop = this.lastPosy
				const lastPlayerBottom = this.lastPosy + height
				
				if (collideXB && collideYBCaseThrough && lastPlayerTop >= component.posy + component.height) {
					collisionAdd(componentIdentifier, THROUGHTYPE)
					break
				}
				else if (collideXT && collideYTCaseThrough && lastPlayerBottom <= component.posy) {
					collisionAdd(componentIdentifier, THROUGHTYPE)
					break
				}

				else if (collideXT && collideYT && lastPlayerBottom <= component.posy) {
					collisionAdd(componentIdentifier, TTYPE, component.posy - (posy + height))
				}
				else if (collideXB && collideYB && lastPlayerTop >= component.posy + component.height) {
					collisionAdd(componentIdentifier, BTYPE, posy - (component.posy + component.height))
				}
				else if (collideXL && collideYL) {
					collisionAdd(componentIdentifier, LTYPE, component.posx - (posx + width))
				}
				else if (collideXR && collideYR) {
					collisionAdd(componentIdentifier, RTYPE, (component.posx + component.width) - posx)
				}

			}
		}
		return {collisions, types, first, TTYPE, BTYPE, LTYPE, RTYPE, THROUGHTYPE}
	}
}