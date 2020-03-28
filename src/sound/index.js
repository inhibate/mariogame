
import {Howl as H, Howler} from 'howler'

const {assign} = Object

const createHInstance = (src, parameters = {}) => new H(assign({src, volume: 0.12}, parameters))

class SFX {}

SFX.bump = createHInstance(['./audio/sfx/Bump.wav'])
SFX.coin = createHInstance(['./audio/sfx/Coin.wav'])
SFX.squish = createHInstance(['./audio/sfx/Squish.wav'])
SFX.jump = createHInstance(['./audio/sfx/Jump.wav'])
SFX.warning = createHInstance(['./audio/sfx/Warning.wav'])
SFX.die = createHInstance(['./audio/sfx/Die.mp3'])
SFX.warp = createHInstance(['./audio/sfx/Warp.wav'])
SFX.gameover = createHInstance(['./audio/sfx/GameOver.mp3'])
SFX.flagpole = createHInstance(['./audio/sfx/Flagpole.mp3'])
SFX.firework = createHInstance(['./audio/sfx/Firework.wav'])
SFX.areaclear = createHInstance(['./audio/sfx/AreaClear.mp3'])
SFX.remainingTimeToPoints = createHInstance(['./audio/sfx/RemainingTimeToPoints.mp3'], {loop: true, volume: 0.19})

class Music {
	static init(complete) {
		const samples = [this.overworld, this.overworldAccelerated]
		const samplesSize = samples.length
		const [LOADEDSTATE, LOADEVENT] = ['loaded', 'load']
		let [loadedSamplesSize, loadingSamplesSize] = [0, 0]
		const loadEventHandler = () => {
			++loadedSamplesSize
			if (loadedSamplesSize == loadingSamplesSize) {
				complete(this.initialized = true)
			}
		}
		for (let sample of samples) if (sample.state() != LOADEDSTATE) loadingSamplesSize++
		for (let sample of samples) if (sample.state() != LOADEDSTATE) sample.once(LOADEVENT, loadEventHandler)
	}

	static initBackgroundMusic(name) {
		if (name == 'overworld') {
			this.backgroundMusic = this.overworld
			this.backgroundMusicAccelerated = this.overworldAccelerated
		}
		else if (name = 'underground') {
			this.backgroundMusic = this.underground
			this.backgroundMusicAccelerated = this.undergroundAccelerated
		}
	}
	static playBackgroundMusic() {
		if (this.backgroundMusic) this.backgroundMusicPlayIdentifier = this.backgroundMusic.play()
	}
	static stopBackgroundMusic() {
		if (this.backgroundMusic) {
			if (SFX.warning.playing()) {
				SFX.warning.stop()
				SFX.warning.off('end')
			}
			if (SFX.jump.playing()) SFX.jump.stop()
			if (SFX.warp.playing()) SFX.warp.stop()
			this.backgroundMusic.stop()
			this.backgroundMusicAccelerated.stop()
		}
	}
	static pauseBackgroundMusic() {
		if (this.backgroundMusic) this.backgroundMusic.pause()
	}
	static playBackgroundMusicAccelerated() {
		if (this.backgroundMusic) {
			this.backgroundMusicAccelerated.play()
		}
	}
	static warning() {
		this.stopBackgroundMusic()
		SFX.warning.play()
		SFX.warning.once('end', () => this.playBackgroundMusicAccelerated())
	}
}

Music.overworld = createHInstance(['./audio/music/Overworld.mp3'], {loop: true})
Music.overworldAccelerated = createHInstance(['./audio/music/OverworldAccelerated.mp3'], {loop: true})

Music.underground = createHInstance(['./audio/music/Underground.mp3'], {loop: true})
Music.undergroundAccelerated = createHInstance(['./audio/music/UndergroundAccelerated.mp3'], {loop: true})


export {SFX, Music}