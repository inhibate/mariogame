
import CanvasComponent from '../../canvasComponent'
import Collision from '../../collision'
import {bindGraphicalTextContainer} from '../container/GraphicalTextContainer'
import Stat from '../../stat'

import {CANVASSCENEH} from '../../misc'

class NPC extends CanvasComponent {
	
	constructor(w, h, filling, posx, posy, type, sx, sy, sw, sh) {
		super(w, h, filling, posx, posy, type, sx, sy, sw, sh)

		const [WALKING, STOMPED, FLYING, HIT, BUMP] = [0, 1, 2, 3, 4]
		/* MAY BE REDEFINED IN CHILD CLASS */
		this.direction = 0
		this.dx = 1
		this.dy = 6.5
		this.scoreValue = 100
		this.states = {WALKING, STOMPED, FLYING, HIT, BUMP}
	}

	_isUnderScene() { return this.posy > CANVASSCENEH }
	
	/* SHOULD BE REDEFINED IN CHILD CLASS */
	hit() {}
	stomp() {}
	
	bump() { this.state = this.states.BUMP }

	clearBump() {
		delete this.state
		delete this.upDownAnimationInitialized
		delete this.inittime
		delete this.animationDownStage
	}
	
	moveX(dx) { this.posx = this.posx + dx }
	moveY(dy) { this.posy = this.posy + dy }
	
	_animateUpDown(durationUp, initDy, time) {
		if (!this.upDownAnimationInitialized) {
			this.inittime = time
			this.upDownAnimationInitialized = true
		}
		const di = time - this.inittime
		if (di <= durationUp) this.moveY(-initDy + initDy * (di / durationUp))
		else {
			let dy = (time - (this.inittime + durationUp)) / 40
			let dyMax = 10
			if (dy > dyMax) dy = dyMax
			this.moveY(dy)
			if (this._isUnderScene()) this._shouldBeRemoved = true
			this.animationDownStage = true
		}
	}
	
	animationBump(time, scene) { if (this.state == this.states.BUMP) this._animateUpDown(150, this.dy * 1.2, time) }

	animationHit(time, scene) {
		if (this.state == this.states.HIT) {
			if (!this.upDownAnimationInitialized) {
				const score = this.scoreValue * 2
				Stat.score(scene, score)
				bindGraphicalTextContainer(undefined, scene, `${score}`, this.posx + this.width / 2, this.posy - 40, 1.4, 600, 35, 1)
			}
			this._animateUpDown(400, this.dy * 1.2, time)
		}
	}

	lookForCollisions(scene) {

		let [PLAYER, HIT, PIT, NPC, NCC, OFFSET] = [false, false, [], [], [], {dx: 0, dy: 0}]
		let res = {PLAYER, HIT, PIT, NPC, NCC, OFFSET}
		
		const [playerComponentIdentifier, NPCPREFIXRE, T, L, R, B, UNKNOWN] = ['player', /^(?:npc|mushroom)\-/, 'T', 'L', 'R', 'B', 'UNKNOWN']

		const components = scene.getAllBindings()
		const collisions = Collision.detect(components, this).collisions

		for (let i = 0; i < collisions.length; i++) {
			const [collisionType, collisionOffset, componentIdentifier] = [collisions[i].collisionType, collisions[i].collisionOffset, collisions[i].componentIdentifier]
			
			const component = scene.getBindedComponent(componentIdentifier)

			const isPlayerComponent = componentIdentifier == playerComponentIdentifier
			const isNPCComponent = NPCPREFIXRE.test(componentIdentifier)
			const isNCCComponent = componentIdentifier != playerComponentIdentifier && !NPCPREFIXRE.test(componentIdentifier)

			const npcL = isNPCComponent && collisionType == L
			const npcR = isNPCComponent && collisionType == R
			
			const nссL = isNCCComponent && collisionType == L
			const nссR = isNCCComponent && collisionType == R
			const nссT = isNCCComponent && collisionType == T
			const nссB = isNCCComponent && collisionType == B

			const UNKNOWNTYPECOLLISION = collisionType == UNKNOWN

			const collidesComponentInHitMode = !!component.inHitMode

			const PITL = collisionType == T && (this.posx + this.width >= component.posx + component.width)
			const PITR = collisionType == T && (this.posx <= component.posx)

			let playerComponent = undefined
			if (isPlayerComponent) playerComponent = scene.getBindedComponent(playerComponentIdentifier)

			if (UNKNOWNTYPECOLLISION) res.UNKNOWNTYPECOLLISION = true
			
			if (PITL) if (res.PIT.includes(L) == false) res.PIT.push(L)
			if (PITR) if (res.PIT.includes(R) == false) res.PIT.push(R)

			if (npcL) if (res.NPC.includes(L) == false) res.NPC.push(L)
			if (npcR) if (res.NPC.includes(R) == false) res.NPC.push(R)

			if (nссL) if (res.NCC.includes(L) == false) res.NCC.push(L)
			if (nссR) if (res.NCC.includes(R) == false) res.NCC.push(R)
			if (nссT) if (res.NCC.includes(T) == false) res.NCC.push(T)
			if (nссB) if (res.NCC.includes(B) == false) res.NCC.push(B)

			// STOMP
			const player2 = isPlayerComponent && collisionType == B && (playerComponent.completedUp == true && !playerComponent.collidedNPC)
			// DIE
			const player1 = isPlayerComponent && (collisionType == T || collisionType == L || collisionType == R || (collisionType == UNKNOWN && !playerComponent.collidedNPC) || (collisionType == B && playerComponent.completedUp == false && !playerComponent.collidedNPC))
			
			if (player1) res.PLAYER = 1
			if (player2) res.PLAYER = 2

			if (!res.HIT && collidesComponentInHitMode) res.HIT = true
			
			if (nссT) res.OFFSET.dy = collisionOffset
			if (nссL || nссR || npcL || npcR) res.OFFSET.dx = collisionOffset
		}
	
		// @res.PLAYER = 1 DIE
		// @res.PLAYER = 2 STOMP
		// @res.NCC = [L,R,T,B]
		// @res.NPC = [L,R]
		// @res.PIT = [L,R]
		// @res.HIT = true | false
		// @res.OFFSET {dx, dy}
		// @res.UNKNOWNTYPECOLLISION
		res.collisions = collisions
		return res
	}

	lookForActions(scene) {
		
		if (this.collidable == false) return false

		let state;
		const [playerComponentID, T, L, R, B] = ['player', 'T', 'L', 'R', 'B']
		const isBonusComponent = this.bonusComponent == true
		const isBumpState = this.state == this.states.BUMP
		
		const processCollisionWithPlayer = scene => {
			let collided = false
			let playerComponent
			state = this.lookForCollisions(scene)
			if (state.PLAYER == 1 || state.PLAYER == 2) {
				collided = true
				playerComponent = scene.getBindedComponent(playerComponentID)
			}
			if (isBonusComponent) { if (collided) playerComponent.collideBonus(scene, [this.componentIdentifier]) }
			else {
				if (state.PLAYER == 1) playerComponent.die(scene, true, true)
				if (state.PLAYER == 2) playerComponent.collideNPC(scene, this.scoreValue)
				if (state.PLAYER == 2) this.stomp()
			}
			return collided
		}

		if (processCollisionWithPlayer(scene)) return false
		else {
			const [UNDERSCENE, HIT, PITL, PITR, NCCL, NCCR, NCCT, NPCL, NPCR] = [this._isUnderScene(), state.HIT == true, state.PIT.includes(L), state.PIT.includes(R), state.NCC.includes(L), state.NCC.includes(R), state.NCC.includes(T), state.NPC.includes(L), state.NPC.includes(R)]
			if (UNDERSCENE) return this._shouldBeRemoved = true
			if (HIT) if (!isBonusComponent) return this.hit()
			if (NCCL || NCCR) this.moveX(state.OFFSET.dx)
			if (this.direction == 1 && (PITL && this.detectsPit || NCCL || NPCL && !this.inHitMode)) this.direction = 0
			if (this.direction == 0 && (PITR && this.detectsPit || NCCR || NPCR && !this.inHitMode)) this.direction = 1
		}
		if (isBumpState) {
			if (this.animationDownStage) {
				if (state.NCC.includes(T)) {
					this.clearBump()
					this.moveY(state.OFFSET.dy)
				}
			}
		}
		else {
			if (!state.UNKNOWNTYPECOLLISION && !state.NCC.includes(T)) {
				this.moveY(this.dy)
				if (processCollisionWithPlayer(scene)) return false 
				if (state.NCC.includes(T)) this.moveY(state.OFFSET.dy)
			}
		}
	}
}

export default NPC