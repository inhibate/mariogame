
import CanvasComponent from '../../canvasComponent'
import NPC from './NPC'
/*
If stomped, it retreats in its shell that can be kicked to hit other enemies and gain points.
Green ones walk back and forth just like Goomba, and red ones timidly turn around when they find a pit.
*/
export default class NPCKoopaTroopa extends NPC {
    // @pallete = 0 RED
    // @pallete = 1 GREEN
    // @pallete = 2 BLUE
    constructor(posx, posy, pallete = 0, direction = 0) {
        const [MAXFRAMEINDEX, DELAY1, DELAY2] = [10, 5000, 2500]
        const [L, R, STOMP, HIT] = ['L', 'R', 'STOMP', 'HIT']
        const isRedPallete = pallete == 0
        // [SX, SY, SW, SH, W, H]
        const SPRITERED = {
            L: [[68, 206, 16, 24, 16 * 2, 24 * 2], [87, 206, 16, 24, 16 * 2, 24 * 2]],
            R: [[410, 206, 16, 24, 16 * 2, 24 * 2], [429, 206, 16, 24, 16 * 2, 24 * 2]],
            STOMP: [[29, 216, 18, 14, 18 * 2, 14 * 2], [48, 215, 18, 16, 18 * 2, 16 * 2]],
            HIT: [[466, 215, 18, 14, 18 * 2, 14 * 2], [447, 215, 18, 16, 18 * 2, 16 * 2]]
        }
        const SPRITEGREEN = {
            L: [[182, 206, 16, 24, 16 * 2, 24 * 2], [201, 206, 16, 24, 16 * 2, 24 * 2]],
            R: [[296, 206, 16, 24, 16 * 2, 24 * 2], [315, 206, 16, 24, 16 * 2, 24 * 2]],
            STOMP: [[143, 216, 18, 14, 18 * 2, 14 * 2], [162, 215, 18, 16, 18 * 2, 16 * 2]],
            HIT: [[352, 216, 18, 14, 18 * 2, 14 * 2], [333, 215, 18, 16, 18 * 2, 16 * 2]]
        }
        const SPRITEBLUE = {
            L: [[182, 233, 16, 24, 16 * 2, 24 * 2], [201, 233, 16, 24, 16 * 2, 24 * 2]],
            R: [[296, 233, 16, 24, 16 * 2, 24 * 2], [315, 233, 16, 24, 16 * 2, 24 * 2]],
            STOMP: [[143, 243, 18, 14, 18 * 2, 14 * 2], [162, 242, 18, 16, 18 * 2, 16 * 2]],
            HIT: [[352, 243, 18, 14, 18 * 2, 14 * 2], [333, 242, 18, 16, 18 * 2, 16 * 2]]
        }

        let SPRITES = undefined
        if (isRedPallete) SPRITES = SPRITERED
        else if (pallete == 1) SPRITES = SPRITEGREEN
        else if (pallete == 2) SPRITES = SPRITEBLUE

        super(0, 0, CanvasComponent.SPRITES.CHARACTERS, posx, posy, 'sprite', 0, 0, 0, 0)
        if (isRedPallete) this.detectsPit = true
        this.speed = { STAND: 0, FAST: 5, NORMAL: this.dx }
        this.animationParameters = {MAXFRAMEINDEX, DELAY1, DELAY2}
        this.spriteTypes = { L, R, STOMP, HIT }
        this.SPRITES = SPRITES
        this.direction = direction
        this.dx = this.speed.NORMAL
        this.state = this.states.WALKING
        this.frameIndex = this.sxsyswshIndex = 0
        this.specifyWalking()
        this.initSprite()
        this.inHitMode = false
        this.scoreValue = 200
        //this.hitbox = {}
    }

    specifyWalking() {
        if (this.direction == 0) this.spriteType = this.spriteTypes.L
        if (this.direction == 1) this.spriteType = this.spriteTypes.R
    }
    
    specifyWH() {
        this.width = this.SPRITES[this.spriteType][this.sxsyswshIndex][4]
        this.height = this.SPRITES[this.spriteType][this.sxsyswshIndex][5]
    }
    
    specifySXSYSWSH() {
		this.sx = this.SPRITES[this.spriteType][this.sxsyswshIndex][0]
		this.sy = this.SPRITES[this.spriteType][this.sxsyswshIndex][1]
		this.sw = this.SPRITES[this.spriteType][this.sxsyswshIndex][2]
		this.sh = this.SPRITES[this.spriteType][this.sxsyswshIndex][3]
    }

    initSprite() {
        this.specifySXSYSWSH()
        this.specifyWH()
    }

    hit() {
        this.state = this.states.HIT
        this.spriteType = this.spriteTypes.HIT
        this.sxsyswshIndex = 0
        this.collidable = false
        this.initSprite()
    }

    stomp() {
        if (this.state != this.states.STOMPED) {
            this.state = this.states.STOMPED
            const dy = this.SPRITES[this.spriteTypes.L][0][5] - this.SPRITES[this.spriteTypes.STOMP][0][5]
            this.posy = this.posy + dy
        }
        this.spriteType = this.spriteTypes.STOMP
        this.sxsyswshIndex = 0
        this.initSprite()
        if (!this.stand) {
            this.inHitMode = false
            this.stand = true
            this.dx = this.speed.STAND
        }
        else if (this.stand == true) {
            this.inHitMode = true
            this.stand = false
            this.dx = this.speed.FAST
            delete this.stompAnimationInitialized
            delete this.inittime
        }
    }

    swapSpriteByFrameIndex() {
        if ((++this.frameIndex % this.animationParameters.MAXFRAMEINDEX) == 0) {
            this.frameIndex = 0
            this.initSprite()
            if (this.sxsyswshIndex == 0) {
                this.sxsyswshIndex = 1
            }
            else if (this.sxsyswshIndex == 1) {
                this.sxsyswshIndex = 0
            }
        }
    }
    
    animate(time, scene) {
        if (this.state == this.states.WALKING) {
            this.specifyWalking()
            this.swapSpriteByFrameIndex()
        }
        else if (this.state == this.states.STOMPED) {
            if (this.stand == true) {
                const {DELAY1, DELAY2} = this.animationParameters
                if (!this.stompAnimationInitialized) {
                    this.stompAnimationInitialized = true
                    this.inittime = time
                }
                const dt1 = time - this.inittime
                if (dt1 >= DELAY1) {
                    const dt2 = time - (this.inittime + DELAY1)
                    if (dt2 >= DELAY2) {
                        const dy = this.SPRITES[this.spriteTypes.L][0][5] - this.SPRITES[this.spriteTypes.STOMP][0][5]
                        this.posy = this.posy - dy
                        this.specifyWalking()
                        this.initSprite()
                        this.stand = false
                        this.state = this.states.WALKING
                        this.dx = this.speed.NORMAL
                        delete this.stompAnimationInitialized
                        delete this.inittime
                    }
                    else this.swapSpriteByFrameIndex()
                }
            }
        }
        else if (this.state == this.states.HIT) this.animationHit(time, scene)
    }
}