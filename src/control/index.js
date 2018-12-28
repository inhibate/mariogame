
import Keyboard from '../keyboard'

let [SPACEPRESSED, DIRECTIONLEFT, DIRECTIONRIGHT, DIRECTIONUPDOWN, DIRECTIONDOWN] = []
const control = {SPACEPRESSED, DIRECTIONLEFT, DIRECTIONRIGHT, DIRECTIONUPDOWN, DIRECTIONDOWN}

control.init = () => {

	Keyboard.space(() => {
		control.DIRECTIONUPDOWN = true
		control.SPACEPRESSED = true
	}, () => control.SPACEPRESSED = false)

	Keyboard.LR(code => {
		control.DIRECTIONLEFT = code == 37
		control.DIRECTIONRIGHT = code == 39
	}, () => control.DIRECTIONLEFT = control.DIRECTIONRIGHT = false)

}

control.clear = () => Keyboard.detachEvents(control.SPACEPRESSED = control.DIRECTIONLEFT = control.DIRECTIONRIGHT = control.DIRECTIONUPDOWN = control.DIRECTIONDOWN = undefined)

export default control