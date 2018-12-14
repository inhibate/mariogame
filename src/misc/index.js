
const delay = function (identifier, object, currenttime, duration) {
	if (!isNumber(object[identifier])) object[identifier] = currenttime
	return currenttime - object[identifier] <= duration
}

delay.clear = (identifier, object) => delete object[identifier]

const entityClassName = (value, lookedClass) => Object.prototype.toString.call(value) == lookedClass

const abs = value => Math.abs(value)

const datenow = () => Date.now && Date.now() || + new Date()

const isfunc = value => typeof value == 'function'

const isNumber = value => typeof value == 'number'

const isObject = value => typeof value == 'object' && value != null

const isRegularExpression = value => entityClassName(value, '[object RegExp]')

const randomizeNumber = () => String(Math.random()).split(/\./)[1]

const SPRITESPATH = '../textures/sprites'

const LEVELBGPATH = '../textures/levels'

const [CANVASSCENEW, CANVASSCENEH] = [720, 445]

const [SCENEW, SCENEH] = [6784, 448]

const [EMPTYCHAR, SPACECHAR] = ['', '\x20']

export { EMPTYCHAR, SPACECHAR }

export { delay, abs, datenow, isfunc, isNumber, isObject, isRegularExpression, randomizeNumber, SPRITESPATH, LEVELBGPATH, SCENEW, SCENEH, CANVASSCENEW, CANVASSCENEH }