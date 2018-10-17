
import {datenow} from './misc'

export default class CanvasScene {

	constructor(w, h) {

		this._components = []

		this._canvas = document.createElement('canvas')
		this._canvas.width = w
		this._canvas.height = h
		
		this._context = this._canvas.getContext('2d')

		this._fps = { freq: 60, freqIndex: 0 }

		this.scene = { context: this._context }

		document.body.insertBefore(
			this._canvas, 
			document.body.childNodes[0]
		)
	}

	_computeFPS(n) {
		if (!this._fps.dp) this._fps.dp = datenow()
		this._fps.fps = (~~((1000 / (datenow() - this._fps.dp)) * (10 ** n))) / (10 ** n)
	}

	fps() {
		if (!this._fps.fps) this._computeFPS(2)
		if ((++this._fps.freqIndex % this._fps.freq) == 0) {
			this._fps.freqIndex = 0
			this._computeFPS(2)
		}
		this._context.font = 'bold 12px Arial'
		this._context.fillStyle = '#000'
		this._context.fillText(`FPS: ${this._fps.fps}`, 10, 20)
		this._fps.dp = datenow()
	}

	clear() {
		this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
	}

	move(dx, omissions) {
		for (let i = 0; i < this._components.length; ++i) {
			if (omissions.includes(this._components[i].componentIdentifier) == false) {
				this._components[i].component.posx += dx
			}
		}
	}

	bindComponent(component, componentIdentifier) {
		if (!componentIdentifier) {
			const components = component._components
			const componentIdentifiers = Object.keys(components)
			for (let i = 0; i < componentIdentifiers.length; ++i) {
				let [componentIdentifier, component] = [componentIdentifiers[i], components[componentIdentifiers[i]]]
				this._components[this._components.length] = { componentIdentifier, component }
			}
		}
		else {
			this._components[this._components.length] = { componentIdentifier, component }
		}
	}

	getAllBindings() {  return this._components }

	getBindedComponent(componentIdentifier) {
		for (let i = 0; i < this._components.length; ++i) {
			if (this._components[i].componentIdentifier == componentIdentifier) {
				return this._components[i].component
			}
		}
	}

	draw(clearScene) {
		if (clearScene == true) {
			this.clear()
		}
		for (let i = 0; i < this._components.length; ++i) {
			if (typeof this._components[i].component.update == 'function') {
				this._components[i].component.update(this._context)
			}
		}
	}

	componentsReady(ready) {
		
		let imgComponentCount = 0
		let imgComponentReadyCount = 0

		const imgComponentReadyCallback = () => {
			imgComponentReadyCount++
			if (imgComponentCount == imgComponentReadyCount) {
				this.draw(false)
				ready()
			}
		}
		
		for (let i = 0; i < this._components.length; ++i) {
			let component = this._components[i].component
			if (component.type == 'image' || component.type == 'sprite') {
				imgComponentCount++
				component.image.src = component.src
				component.image.onload = imgComponentReadyCallback
			}
		}
	}

}

