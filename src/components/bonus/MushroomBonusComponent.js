
import CanvasComponent from '../../canvasComponent'
import NPC from '../npc/NPC'
import { randomizeNumber } from '../../misc'

export default class MushroomBonusComponent extends NPC {
    /* @pallete = 'OW' (USED IN OVERWORLD LEVELS) */
	/* @pallete = 'UG' (USED IN UNDERGROUND LEVELS) */
	/* @pallete = 'CASTLE' (USED IN CASTLE LEVELS) */
	/* @pallete = 'UW' (USED IN UNDERWATER LEVELS) */
    constructor(pallete = 'OW', smile = false, direction = 0) {
        const [SW, SH] = [16, 16]
        const [W, H] = [SW * 2, SH * 2]
		const [OW, UG, CASTLE, UW] = ['OW', 'UG', 'CASTLE', 'UW']
        const OWPALLETE = [[0, 0, SW, SH], [16, 0, SW, SH], [32, 0, SW, SH]]
        const OWPALLETESMILE = [[0, 16, SW, SH], [16, 16, SW, SH], [32, 16, SW, SH]]
		const UGPALLETE = [[144, 0, SW, SH], [160, 0, SW, SH], [176, 0, SW, SH]]
        const UGPALLETESMILE = [[144, 16, SW, SH], [160, 16, SW, SH], [176, 16, SW, SH]]
        const CASTLEPALLETE = [[288, 0, SW, SH], [304, 0, SW, SH], [320, 0, SW, SH]]
        const CASTLEPALLETESMILE = [[288, 16, SW, SH], [304, 16, SW, SH], [320, 16, SW, SH]]
        const UWPALLETE = [[432, 0, SW, SH], [448, 0, SW, SH], [464, 0, SW, SH]]
        const UWPALLETESMILE = [[432, 16, SW, SH], [448, 16, SW, SH], [464, 16, SW, SH]]
		let PALLETE
		if (pallete == OW) {
            PALLETE = [OWPALLETE, OWPALLETESMILE]
        }
		else if (pallete == UG) {
            PALLETE = [UGPALLETE, UGPALLETESMILE]
        }
		else if (pallete == CASTLE) {
            PALLETE = [CASTLEPALLETE, CASTLEPALLETESMILE]
        } 
        else if (pallete == UW) {
            PALLETE = [UWPALLETE, UWPALLETESMILE]
        }
        if (smile) {
            super(W, H, CanvasComponent.SPRITES.C, 0, 0, 'sprite', PALLETE[1][0][0], PALLETE[1][0][1], PALLETE[1][0][2], PALLETE[1][0][3])
            this.smile = true
            this.pallete = PALLETE[1]
        }
        else {
            super(W, H, CanvasComponent.SPRITES.C, 0, 0, 'sprite', PALLETE[0][0][0], PALLETE[0][0][1], PALLETE[0][0][2], PALLETE[0][0][3])
            this.smile = false
            this.pallete = PALLETE[0]         
        }
        this.PALLETE = PALLETE
        const [MOVINGOUTOFTHEBOX, BUMP, AMPLITUDE, DURATION] = [5, this.states.BUMP, this.height, 750]
        this.states = { MOVINGOUTOFTHEBOX, BUMP }
        this.animationParameters = { AMPLITUDE, DURATION }
        this.direction = direction
        this.componentIdentifier = `mushroom-0-${randomizeNumber()}`
        this.bonusComponent = true
        delete this.scoreValue
    }
    
    init(pposx, pposy, pw, ph) {
        // Play SFX
		this.posx = pposx
		this.posy = pposy
        this.state = this.states.MOVINGOUTOFTHEBOX
        this.collidable = false
        this.dx = 0
    }
    
    smile(bool) {
        this.smile = bool
        if (this.smile) this.pallete = this.PALLETE[1]
        else this.pallete = this.PALLETE[0]
    }
    
    take() { this._shouldBeRemoved = true }

    animate(time, scene) {
        const {DURATION, AMPLITUDE} = this.animationParameters
        if (this.state == this.states.MOVINGOUTOFTHEBOX) {
            if (!this.animationInitialized) {
                this.animationInitialized = true
                this.inittime = time
                this.initposy = this.posy
            }
			let durationIndex = (time - this.inittime) / DURATION
			let ANIMATIONCOMPLETED = false
            if (durationIndex >= 1) ANIMATIONCOMPLETED = true
            if (ANIMATIONCOMPLETED == true) {
                this.posy = this.initposy - this.height
                this.collidable = true
                this.dx = 3.5
                delete this.animationInitialized
                delete this.inittime
                delete this.initposy
                delete this.state
            }
            else this.posy = this.initposy - AMPLITUDE * durationIndex
        }
        else if (this.state == this.states.BUMP) this.animationBump(time, scene)
    }
}