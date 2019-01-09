
import {isfunc} from '../misc'

let keyDownEventHandler1,
		keyDownEventHandler2,
		keyDownEventHandler3,
		keyUpEventHandler1,
		keyUpEventHandler2,
		keyDownEventHandler4, keyUpEventHandler4
		
const event = window.addEventListener
const eventRemove = window.removeEventListener

class Keyboard {

	static _ifLR(event) { return event.keyCode == 39 || event.keyCode == 37 }
	static _ifspace(event) { return event.keyCode == 32 }
	static _ifenter(event) { return event.keyCode == 13 }
	static _ifdown(event) { return event.keyCode == 40 }
	
	static space(downEventHanlder, upEventHandler) {
		event(Keyboard.KEYDOWN, keyDownEventHandler1 = event => {
			if (Keyboard._ifspace(event)) {
				if (!Keyboard._spacepressed) {
					Keyboard._spacepressed = true
					if (isfunc(downEventHanlder)) downEventHanlder(event.keyCode)
				}
			}
		})
		event(Keyboard.KEYUP, keyUpEventHandler1 = event => {
			if (Keyboard._ifspace(event)) {
				Keyboard._spacepressed = false
				if (isfunc(upEventHandler)) upEventHandler(event.keyCode)
			}
		})
	}

	static LR(downEventHanlder, upEventHandler) {
		event(Keyboard.KEYDOWN, keyDownEventHandler2 = event => {
			if (Keyboard._ifLR(event)) {
				if (Keyboard._LRpressedCode != event.keyCode) {
					Keyboard._LRpressedCode = event.keyCode
					if (isfunc(downEventHanlder)) downEventHanlder(event.keyCode)
				}
			}
		})
		event(Keyboard.KEYUP, keyUpEventHandler2 = event => {
			if (Keyboard._ifLR(event)) {
				if (Keyboard._LRpressedCode == event.keyCode) {
					Keyboard._LRpressedCode = false
					if (isfunc(upEventHandler)) upEventHandler(event.keyCode)
				}
			}
		})
	}
	
	static ENTER(downEventHanlder) {
		event(Keyboard.KEYDOWN, keyDownEventHandler3 = event => {
			if (Keyboard._ifenter(event)) downEventHanlder()
		})
	}

	static DOWN(downEventHanlder, upEventHandler) {
		event(Keyboard.KEYDOWN, keyDownEventHandler4 = event => {
			if (Keyboard._ifdown(event)) {
				if (Keyboard._downPressedCode != event.keyCode) {
					Keyboard._downPressedCode = event.keyCode
					if (isfunc(downEventHanlder)) downEventHanlder(event.keyCode)
				}
			}
		})
		event(Keyboard.KEYUP, keyUpEventHandler4 = event => {
			if (Keyboard._ifdown(event)) {
				if (Keyboard._downPressedCode == event.keyCode) {
					Keyboard._downPressedCode = false
					if (isfunc(upEventHandler)) upEventHandler(event.keyCode)
				}
			}
		})
	}

	static detachEvents() {
		eventRemove(Keyboard.KEYUP, keyUpEventHandler1)
		eventRemove(Keyboard.KEYUP, keyUpEventHandler2)
		eventRemove(Keyboard.KEYDOWN, keyDownEventHandler1)
		eventRemove(Keyboard.KEYDOWN, keyDownEventHandler2)

		eventRemove(Keyboard.KEYDOWN, keyDownEventHandler3)

		eventRemove(Keyboard.KEYDOWN, keyDownEventHandler4)
		eventRemove(Keyboard.KEYUP, keyUpEventHandler4)
	}
}

Keyboard.KEYUP = 'keyup'
Keyboard.KEYDOWN = 'keydown'

export default Keyboard