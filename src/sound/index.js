
import {Howl as H, Howler} from 'howler'

const {assign} = Object

const createHInstance = (src, parameters = {}) => new H(assign({src, volume: 0.12}, parameters))

class SFX {}

class Music {
	static initLevelMusic(HInstance) { 
		this.levelMusic = HInstance
	}
	static stopLevelMusic() {
		if (this.levelMusic) this.levelMusic.stop()
	}
}

Music.die = createHInstance(['../audio/music/Die.mp3'])
Music.overworld = createHInstance(['../audio/music/Overworld.mp3'])

SFX.up1 = createHInstance(['../audio/sfx/1up.wav'])
SFX.beep = createHInstance(['../audio/sfx/Beep.wav'])
SFX.bigjump = createHInstance(['../audio/sfx/BigJump.wav'])
SFX.bowserdie = createHInstance(['../audio/sfx/BowserDie.wav'])
SFX.bump = createHInstance(['../audio/sfx/Bump.wav'])
SFX.coin = createHInstance(['../audio/sfx/Coin.wav'])
SFX.enemyfire = createHInstance(['../audio/sfx/EnemyFire.wav'])
SFX.fireball = createHInstance(['../audio/sfx/FireBall.wav'])
SFX.flagpole = createHInstance(['../audio/sfx/Flagpole.wav'])
SFX.gameover = createHInstance(['../audio/sfx/GameOver.wav'])
SFX.item = createHInstance(['../audio/sfx/Item.wav'])
SFX.jump = createHInstance(['../audio/sfx/Jump.wav'])
SFX.kick = createHInstance(['../audio/sfx/Kick.wav'])
SFX.pause = createHInstance(['../audio/sfx/Pause.wav'])
SFX.powerup = createHInstance(['../audio/sfx/Powerup.wav'])
SFX.skid = createHInstance(['../audio/sfx/Skid.wav'])
SFX.squish = createHInstance(['../audio/sfx/Squish.wav'])
SFX.thwomp = createHInstance(['../audio/sfx/Thwomp.wav'])
SFX.vine = createHInstance(['../audio/sfx/Vine.wav'])
SFX.warp = createHInstance(['../audio/sfx/Warp.wav'])

export {SFX, Music}