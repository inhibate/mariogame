
export default class CanvasComponent {
	
	constructor(w, h, filling, posx, posy, type, sx, sy, sw, sh, alpha = 1) {

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

		this.alpha = alpha

		if (type == 'image' || type == 'sprite') {
			this.image = filling
		}
		else {
			this.filling = filling
		}
	}

	render(canvasContext) {
		const defaultAlphaIndex = 1
		canvasContext.globalAlpha = this.alpha

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

		canvasContext.globalAlpha = defaultAlphaIndex
	}
}