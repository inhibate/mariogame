
import {isfunc} from '../misc'

const event = window.addEventListener

class Keyboard {

	static _ifLR(event) { return event.keyCode == 39 || event.keyCode == 37 }
	static _ifspace(event) { return event.keyCode == 32 }
	
	static space(upEventHandler, downEventHanlder) {
		if (!Keyboard._spaceInitialized) {
			event(Keyboard.KEYDOWNEVENTNAME, event => {
				if (Keyboard._ifspace(event)) {
					if (!Keyboard._spacepressed) {
						Keyboard._spacepressed = true
						if (isfunc(upEventHandler)) upEventHandler(event.keyCode)
					}
				}
			})
			event(Keyboard.KEYUPEVENTNAME, event => {
				if (Keyboard._ifspace(event)) {
					Keyboard._spacepressed = false
					if (isfunc(downEventHanlder)) downEventHanlder(event.keyCode)
				}
			})
			Keyboard._spaceInitialized = true
		}
	}

	static LR(upEventHandler, downEventHanlder) {
		if (!Keyboard._LRInitialized) {
			event(Keyboard.KEYDOWNEVENTNAME, event => {
				if (Keyboard._ifLR(event)) {
					if (Keyboard._LRpressedCode != event.keyCode) {
						Keyboard._LRpressedCode = event.keyCode
						if (isfunc(upEventHandler)) upEventHandler(event.keyCode)
					}
				}
			})
			event(Keyboard.KEYUPEVENTNAME, event => {
				if (Keyboard._ifLR(event)) {
					if (Keyboard._LRpressedCode == event.keyCode) {
						Keyboard._LRpressedCode = false
						if (isfunc(downEventHanlder)) downEventHanlder(event.keyCode)
					}
				}
			})
			Keyboard._LRInitialized = true
		}
	}

}

Keyboard.KEYUPEVENTNAME = 'keyup'
Keyboard.KEYDOWNEVENTNAME = 'keydown'

export default Keyboard;