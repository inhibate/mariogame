
import {bindGraphicalTextContainer} from './container/GraphicalTextContainer'
import CanvasComponent from '../canvasComponent'
import TriangleBoxComponent from './TriangleBoxComponent'
import TransparentBoxComponent from './TransparentBoxComponent'

const {entries} = Object
const [stickComponentIdentifier, flagComponentIdentifier, triangleBoxComponentIdentifier, playerComponentIdentifier] = ['flagpole-stick', 'flagpole-flag', 'flagpole-ttc', 'player']

export default class FlagpoleBoxComponent {
	/*@pallete = 0*/
	/*@pallete = 1*/
	/*@pallete = 2*/
	constructor(posx, posy, pallete = 0) {
		let FFLAGPALLETE = undefined
		const [FSTICKW, FSTICKWH, FFLAGW, FFLAGH, FFLAGSPRITE] = [5, 300, 32, 32, CanvasComponent.SPRITES.C]
		const FFLAGPALLETE0 = [128, 32, FFLAGW / 2, FFLAGH / 2]
		const FFLAGPALLETE1 = [272, 32, FFLAGW / 2, FFLAGH / 2]
		const FFLAGPALLETE2 = [560, 32, FFLAGW / 2, FFLAGH / 2]
		
		if (pallete == 0) FFLAGPALLETE = FFLAGPALLETE0
		if (pallete == 1) FFLAGPALLETE = FFLAGPALLETE1
		if (pallete == 2) FFLAGPALLETE = FFLAGPALLETE2

		const triangleBoxComponent = new TriangleBoxComponent(posx, posy)
		const stickBoxComponent = new TransparentBoxComponent(posx + triangleBoxComponent.width / 2 - FSTICKW / 2, posy - FSTICKWH, FSTICKW, FSTICKWH)
		const flagBoxComponent = new CanvasComponent(FFLAGW + FSTICKW, FFLAGH, FFLAGSPRITE, stickBoxComponent.posx - FFLAGW, stickBoxComponent.posy + 15, 'sprite', FFLAGPALLETE[0], FFLAGPALLETE[1], FFLAGPALLETE[2], FFLAGPALLETE[3])
		flagBoxComponent.collidable = false

		const components = {[triangleBoxComponentIdentifier]: triangleBoxComponent, [stickComponentIdentifier]: stickBoxComponent, [flagComponentIdentifier]: flagBoxComponent};

		[this.bindable, this._components] = [true, components]
	}

	launchAnimation(scene, pointsAmount, complete) {
		scene.bindComponentForAnimation(this.componentIdentifier)
		this.completeAnimaton = complete
		this._pointsAmount = pointsAmount
	}

	animate(time, scene) {
		const [stick, flag] = [this._components[stickComponentIdentifier], this._components[flagComponentIdentifier]]
		const [stickOffset, FLAGPOLEDY] = [10, scene.getBindedComponent(playerComponentIdentifier).movement.FLAGPOLEDY]
		const stickTerminalPosition = stick.posy + stick.height - stickOffset
		flag.posy = flag.posy + FLAGPOLEDY
		this._flagAnimated = flag.posy + flag.height >= stickTerminalPosition
		if (!this._animationInitialized) {
			this._animationInitialized = true
			const customAnimationFunction = (time, scene, components, containerIdentifier) => {
				entries(components).forEach(entry => entry[1].posy = entry[1].posy - FLAGPOLEDY)
				if (this._flagAnimated) {
					scene.unbindComponent(containerIdentifier)
					this.completeAnimaton()
					delete this._flagAnimated
					return true
				}
			}
			bindGraphicalTextContainer(customAnimationFunction, scene, `${this._pointsAmount}`, stick.posx + stick.width + 5, stickTerminalPosition - 30, 1.7, undefined, undefined, 1)
		}
		if (this._flagAnimated) {
			flag.posy = stickTerminalPosition - flag.height
			delete this._animationInitialized
			delete this._pointsAmount
			scene.unbindComponent(this.componentIdentifier)
			return true
		}
	}
}