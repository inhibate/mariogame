
import {datenow, abs, CANVASSCENEW} from './misc'

export default class CanvasScene {

	constructor(CanvasComponent, w, h, sprites) {

		this.CanvasComponent = CanvasComponent
		this.CanvasComponent.SPRITES = {}

		this._sprites = sprites
		this._components = []
		this._componentsForAnimation = []
		this._canvas = document.createElement('canvas')
		this._context = this._canvas.getContext('2d')
		this._canvas.width = w
		this._canvas.height = h		
		this._fps = { freq: 60, freqIndex: 0, color: '#000', font: 'bold 12px Arial' }

		this.scene = { context: this._context }

		document.body.insertBefore(this._canvas, document.body.childNodes[0])
	}

	_computeFPS(n) {
		const fps = this._fps
		const {dp} = this._fps
		if (!dp) fps.dp = datenow()
		fps.fps = (~~((1000 / (datenow() - dp)) * (10 ** n))) / (10 ** n)
	}

	fps(color) {
		const [fps, context] = [this._fps, this._context]
		if (!fps.fps) this._computeFPS(2)
		if ((++fps.freqIndex % fps.freq) == 0) {
			fps.freqIndex = 0
			this._computeFPS(2)
		}
		context.font = fps.font
		context.fillStyle = color || fps.color
		context.fillText(`FPS ${fps.fps}`, 10, 20)
		fps.dp = datenow()
	}

	clear() {
		this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
	}
	
	zindex(componentIdentifier1, componentIdentifier2) /* component1 < component2 */ {
		let [zindex1, zindex2, shouldSwap] = []
		for (let i = 0; i < this._components.length; ++i) {
			const wrappedComponent = this._components[i]
			if (wrappedComponent.componentIdentifier == componentIdentifier1) zindex1 = i
			if (wrappedComponent.componentIdentifier == componentIdentifier2) zindex2 = i
			if (zindex1 !== undefined && zindex2 !== undefined) {
				shouldSwap = zindex1 > zindex2
				break
			}
		}
		if (shouldSwap) {
			const zindex1WrappedComponent = this._components[zindex1]
			this._components[zindex1] = this._components[zindex2]
			this._components[zindex2] = zindex1WrappedComponent
		}
	}

	backgroundOffset() {
		const backgroundComponentIdentifier = 'bg'
		const backgroundComponent = this.getBindedComponent(backgroundComponentIdentifier)
		if (backgroundComponent) {
			return (abs(backgroundComponent.posx) + CANVASSCENEW) - backgroundComponent.width
		}
	}

	move(dx, omissions = []) {
		for (let i = 0; i < this._components.length; ++i) {
			if (this._components[i].component.unmovable) continue
			if (omissions.includes(this._components[i].componentIdentifier) == false) {
				this._components[i].component.posx += dx
			}
		}
	}

	bindComponent(component, componentIdentifier) {
		const playerComponentIdentifier = 'player'
		if (!componentIdentifier) {
			const components = component._components
			const componentIdentifiers = Object.keys(components)
			for (let i = 0; i < componentIdentifiers.length; ++i) {
				let [componentIdentifier, component] = [componentIdentifiers[i], components[componentIdentifiers[i]]]
				component.componentIdentifier = componentIdentifier
				this._components[this._components.length] = { componentIdentifier, component }
			}
		}
		else {
			component.componentIdentifier = componentIdentifier
			this._components[this._components.length] = { componentIdentifier, component }
		}
		const componentLast = this._components[this._components.length - 1]
		if (componentLast.componentIdentifier != playerComponentIdentifier) {
			for (let i = 0; i < this._components.length; ++i) {
				if (this._components[i].componentIdentifier == playerComponentIdentifier) {
					this._components[this._components.length - 1] = this._components[i]
					this._components[i] = componentLast
					break
 				}
			}
		}
	}

	unbindComponent(componentIdentifier) {
		for (let i = 0; i < this._components.length; ++i) {
			if (this._components[i].componentIdentifier == componentIdentifier) {
				return this._components.splice(i, 1)
			}
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

	getBindedComponentsForAnimation() { return this._componentsForAnimation }

	render(clearScene) {
		if (clearScene == true) {
			this.clear()
		}
		for (let i = 0; i < this._components.length; ++i) {
			if (typeof this._components[i].component.render == 'function') {
				this._components[i].component.render(this._context)
			}
		}
	}

	unbindComponentForAnimation(componentIdentifier) {
		for (let i = 0, componentsForAnimation = this._componentsForAnimation; i < componentsForAnimation.length; ++i) {
			if (componentsForAnimation[i] == componentIdentifier) {
				return componentsForAnimation.splice(i, 1)
			}
		}
	}
	
	bindComponentForAnimation(componentIdentifier) {
		if (this._componentsForAnimation.includes(componentIdentifier) == false) {
			this._componentsForAnimation[this._componentsForAnimation.length] = componentIdentifier
		}
	}

	animate(time) {
		for (let i = 0, componentsForAnimation = this._componentsForAnimation; i < componentsForAnimation.length; ++i) {
			let [component, unbind] = [this.getBindedComponent(componentsForAnimation[i]), false]
			if (typeof component.animate == 'function') {
				unbind = component.animate(time, this)
			}
			if (unbind) this.unbindComponentForAnimation(componentsForAnimation[i--])
		}
	}

	init(init) {
		
		const spritesEntries = Object.entries(this._sprites)
		const spritesSize = spritesEntries.length

		let spritesLoadedSize = 0
		
		const spriteImageLoad = (spriteImage, spriteName) => {
			spritesLoadedSize++
			this.CanvasComponent.SPRITES[spriteName] = spriteImage
			if (spritesLoadedSize == spritesSize) init(this)
		}

		spritesEntries.forEach(sprite => {
			const [NAME, SRC] = [0, 1]
			const [spriteName, spriteSrc, spriteImage] = [sprite[NAME], sprite[SRC], new Image]
			spriteImage.src = spriteSrc
			spriteImage.onload = () => spriteImageLoad(spriteImage, spriteName)
		})
	}
}
