
import {isfunc} from '../misc'

let keyDownEventHandler1, keyDownEventHandler2, keyDownEventHandler3, keyUpEventHandler1, keyUpEventHandler2
const event = window.addEventListener
const eventRemove = window.removeEventListener

class Keyboard {

	static _ifLR(event) { return event.keyCode == 39 || event.keyCode == 37 }
	static _ifspace(event) { return event.keyCode == 32 }
	static _ifenter(event) { return event.keyCode == 13 }
	
	static space(upEventHandler, downEventHanlder) {
		event(Keyboard.KEYDOWN, keyDownEventHandler1 = event => {
			if (Keyboard._ifspace(event)) {
				if (!Keyboard._spacepressed) {
					Keyboard._spacepressed = true
					if (isfunc(upEventHandler)) upEventHandler(event.keyCode)
				}
			}
		})
		event(Keyboard.KEYUP, keyUpEventHandler1 = event => {
			if (Keyboard._ifspace(event)) {
				Keyboard._spacepressed = false
				if (isfunc(downEventHanlder)) downEventHanlder(event.keyCode)
			}
		})
	}

	static LR(upEventHandler, downEventHanlder) {
		event(Keyboard.KEYDOWN, keyDownEventHandler2 = event => {
			if (Keyboard._ifLR(event)) {
				if (Keyboard._LRpressedCode != event.keyCode) {
					Keyboard._LRpressedCode = event.keyCode
					if (isfunc(upEventHandler)) upEventHandler(event.keyCode)
				}
			}
		})
		event(Keyboard.KEYUP, keyUpEventHandler2 = event => {
			if (Keyboard._ifLR(event)) {
				if (Keyboard._LRpressedCode == event.keyCode) {
					Keyboard._LRpressedCode = false
					if (isfunc(downEventHanlder)) downEventHanlder(event.keyCode)
				}
			}
		})
	}
	
	static ENTER(downEventHanlder) {
		event(Keyboard.KEYDOWN, keyDownEventHandler3 = event => {
			if (Keyboard._ifenter(event)) downEventHanlder()
		})
	}

	static detachEvents() {
		eventRemove(Keyboard.KEYUP, keyUpEventHandler1)
		eventRemove(Keyboard.KEYUP, keyUpEventHandler2)
		eventRemove(Keyboard.KEYDOWN, keyDownEventHandler1)
		eventRemove(Keyboard.KEYDOWN, keyDownEventHandler2)
		eventRemove(Keyboard.KEYDOWN, keyDownEventHandler3)
	}
}

Keyboard.KEYUP = 'keyup'
Keyboard.KEYDOWN = 'keydown'

export default Keyboard