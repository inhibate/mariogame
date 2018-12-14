
import {CANVASSCENEW, isRegularExpression} from './misc/'

export default class CanvasComponent {
	
	constructor(w, h, filling, posx, posy, type, sx, sy, sw, sh) {

		this.collidable = true
		this.unmovable = false
		
		this.type = type
		
		this.posx = posx
		this.posy = posy
		this.width = w
		this.height = h

		this.sx = sx 
		this.sy = sy
		this.sw = sw
		this.sh = sh

		if (type == 'image' || type == 'sprite') {
			this.image = filling
		}
		else {
			this.filling = filling
		}

	}

	render(canvasContext) {
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
}