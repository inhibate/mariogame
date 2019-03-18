
import TransparentBoxComponent from './TransparentBoxComponent'

class ControlPointComponent extends TransparentBoxComponent {
	constructor(posx, posy, W, H, type) {
		super(posx, posy, W, H)
		this.controlPointType = type
	}
}
ControlPointComponent.TYPES = {CASTLEENTRY: 0, WARPZONE: 1}
export default ControlPointComponent