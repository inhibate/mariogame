
import {datenow, isfunc} from '../misc'

let [animationEnded, ns] = [false]
/*
		RAF.launch((pt) => {})
		RAF.endLaunched()
*/
export default class RAF {

	static _performanceNow() {
		if (performance && (performance.now || performance.webkitNow)) {
			if (isfunc(performance.now)) return performance.now()
			else if (isfunc(performance.webkitNow)) return performance.webkitNow()
		}
		else {
			if (performance && performance.timing && performance.timing.navigationStart) ns = performance.timing.navigationStart
			else ns = datenow()
			return datenow() - ns
		}
	}

	static _requestAnimationFrame() {
		return requestAnimationFrame || webkitRequestAnimationFrame || mozRequestAnimationFrame || msRequestAnimationFrame || oRequestAnimationFrame || (() => (FRAME) => setTimeout(FRAME, 1000 / 60))
	}
	
	static launch(frame) {
		
		animationEnded = false

		const INITTIME = RAF._performanceNow()
		const requestAnimationFrame = RAF._requestAnimationFrame()

		const FRAME = frameTime => {
			frame(frameTime - INITTIME)
			if (animationEnded == false) requestAnimationFrame(FRAME)
		}
		requestAnimationFrame(FRAME)
	}

	static endLaunched() { animationEnded = true }
}