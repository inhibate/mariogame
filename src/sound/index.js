
import {Howl as H, Howler} from 'howler'

const {assign} = Object

const createHInstance = (src, parameters = {}) => new H(assign({src, volume: 0.12}, parameters))

class SFX {}

SFX.bump = createHInstance(['../audio/sfx/Bump.wav'])
SFX.coin = createHInstance(['../audio/sfx/Coin.wav'])
SFX.squish = createHInstance(['../audio/sfx/Squish.wav'])
SFX.jump = createHInstance(['../audio/sfx/Jump.wav'])
SFX.warning = createHInstance(['../audio/sfx/Warning.wav'])
SFX.die = createHInstance(['../audio/sfx/Die.mp3'])
SFX.warp = createHInstance(['../audio/sfx/Warp.wav'])
SFX.gameover = createHInstance(['../audio/sfx/GameOver.mp3'])

SFX.up1 = createHInstance(['../audio/sfx/1up.wav'])
SFX.bigjump = createHInstance(['../audio/sfx/BigJump.wav'])
SFX.bowserdie = createHInstance(['../audio/sfx/BowserDie.wav'])
SFX.enemyfire = createHInstance(['../audio/sfx/EnemyFire.wav'])
SFX.fireball = createHInstance(['../audio/sfx/FireBall.wav'])
SFX.flagpole = createHInstance(['../audio/sfx/Flagpole.wav'])
SFX.kick = createHInstance(['../audio/sfx/Kick.wav'])
SFX.powerup = createHInstance(['../audio/sfx/Powerup.wav'])
SFX.skid = createHInstance(['../audio/sfx/Skid.wav'])
SFX.thwomp = createHInstance(['../audio/sfx/Thwomp.wav'])
SFX.vine = createHInstance(['../audio/sfx/Vine.wav'])
//delete?
SFX.beep = createHInstance(['../audio/sfx/Beep.wav'])
SFX.pause = createHInstance(['../audio/sfx/Pause.wav'])
SFX.item = createHInstance(['../audio/sfx/Item.wav'])

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

Music.overworld = createHInstance(['../audio/music/Overworld.mp3'], {loop: true})
Music.overworldAccelerated = createHInstance(['../audio/music/OverworldAccelerated.mp3'], {loop: true})

export {SFX, Music}