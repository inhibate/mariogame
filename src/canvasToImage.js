

class CanvasToImage {
	static generateImage(canvasElement) {
		//data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAVHElEQVR4Xu1dX+xmV1Vd0AootLS1FAIkgFax0IahpdEYYCZQDPL3gQb/JIoENPBQOggg==
		const base64URL = canvasElement.toDataURL()
		const img = document.createElement('img')
		img.src = base64URL
		return img
	}
}
export default CanvasToImage