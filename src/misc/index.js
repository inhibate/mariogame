
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

const each = (d, f) => setInterval(f, d)

const after = (d, f) => setTimeout(f, d)

const precision = (number, precision) => Math.round(number * (10 ** precision)) / (10 ** precision)

const randomize = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1))

const SPRITESPATH = '../textures/sprites'

const LEVELBGPATH = '../textures/levels'

const OTHERPATH = '../textures/other'

const [CANVASSCENEW, CANVASSCENEH] = [720, 480]

const [SCENEW, SCENEH] = [6656, 480]

const [EMPTYCHAR, SPACECHAR] = ['', '\x20']

export { EMPTYCHAR, SPACECHAR, SPRITESPATH, LEVELBGPATH, OTHERPATH, SCENEW, SCENEH, CANVASSCENEW, CANVASSCENEH }

export { delay, abs, datenow, isfunc, isNumber, isObject, isRegularExpression, randomizeNumber, each, after, precision, randomize }