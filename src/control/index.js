
import Keyboard from '../keyboard'

let [SPACEPRESSED, DOWNPRESSED, DIRECTIONLEFT, DIRECTIONRIGHT, DIRECTIONUPDOWN, DIRECTIONDOWN, INITIALIZED = false] = []
const control = {SPACEPRESSED, DOWNPRESSED, DIRECTIONLEFT, DIRECTIONRIGHT, DIRECTIONUPDOWN, DIRECTIONDOWN, INITIALIZED}

control.init = () => {
	
	control.INITIALIZED = true

	Keyboard.space(() => {
		control.DIRECTIONUPDOWN = true
		control.SPACEPRESSED = true
	}, () => control.SPACEPRESSED = false)

	Keyboard.LR(code => {
		control.DIRECTIONLEFT = code == 37
		control.DIRECTIONRIGHT = code == 39
	}, () => control.DIRECTIONLEFT = control.DIRECTIONRIGHT = false)

	Keyboard.DOWN(() => control.DOWNPRESSED = true, () => control.DOWNPRESSED = false)

}

control.clear = () => Keyboard.detachEvents(control.SPACEPRESSED = control.DOWNPRESSED = control.DIRECTIONLEFT = control.DIRECTIONRIGHT = control.DIRECTIONUPDOWN = control.DIRECTIONDOWN = undefined)

export default control