
import Keyboard from '../keyboard'

let [SPACEPRESSED, DIRECTIONLEFT, DIRECTIONRIGHT, DIRECTIONUPDOWN, DIRECTIONDOWN] = []
const control = {SPACEPRESSED, DIRECTIONLEFT, DIRECTIONRIGHT, DIRECTIONUPDOWN, DIRECTIONDOWN}

Keyboard.space(() => {
	control.DIRECTIONUPDOWN = true
	control.SPACEPRESSED = true
}, () => control.SPACEPRESSED = false)

Keyboard.LR(code => {
	control.DIRECTIONLEFT = code == 37
	control.DIRECTIONRIGHT = code == 39
}, () => control.DIRECTIONLEFT = control.DIRECTIONRIGHT = false)

export default control