
import CanvasComponent from '../../canvasComponent'
import Collision from '../../collision'

class NPC extends CanvasComponent {
	
	constructor(w, h, filling, posx, posy, type, sx, sy, sw, sh) {
		super(w, h, filling, posx, posy, type, sx, sy, sw, sh)

		const [WALKING, STOMPED, FLYING] = [0, 1, 2]
		/* MAY BE REDEFINED IN CHILD CLASS */
		this.direction = 0
		this.dx = 1.2
		this.dy = 6.5
		this.scoreValue = 100
		this.states = {WALKING, STOMPED, FLYING}
	}
	
	/* MAY BE REDEFINED IN CHILD CLASS */
	stomp() {}
	
	moveX(dx) { this.posx = this.posx + dx }
	moveY(dy) { this.posy = this.posy + dy }
	
	lookForCollisions(scene) {

		let [PLAYER, NPC, NCC, PIT, OFFSET] = [false, new Array, new Array, new Array, {dx: 0, dy: 0}]
		let res = {PLAYER, NPC, NCC, PIT, OFFSET}
		
		const [playerComponentIdentifier, NPCPREFIXRE, T, L, R, B] = ['player', /^(?:npc\-)/, 'T', 'L', 'R', 'B']

		const [components, playerComponent] = [scene.getAllBindings(), scene.getBindedComponent(playerComponentIdentifier)]
		
		const collisions = Collision.detect(components, this).collisions

		for (let i = 0; i < collisions.length; i++) {
			const [collisionType, collisionOffset, componentIdentifier] = [collisions[i].collisionType, collisions[i].collisionOffset, collisions[i].componentIdentifier]
			
			const isPlayerComponent = componentIdentifier == playerComponentIdentifier
			const isNPCComponent = NPCPREFIXRE.test(componentIdentifier)
			const isNCCComponent = componentIdentifier != playerComponentIdentifier && !NPCPREFIXRE.test(componentIdentifier)

			const npcL = isNPCComponent && collisionType == L
			const npcR = isNPCComponent && collisionType == R
			
			const nссL = isNCCComponent && collisionType == L
			const nссR = isNCCComponent && collisionType == R
			const nссT = isNCCComponent && collisionType == T
			const nссB = isNCCComponent && collisionType == B
			
			/*(STOMP)*/
			const player2 = isPlayerComponent && collisionType == B && playerComponent.completedUp
			/*(DIE)*/
			const player1 = isPlayerComponent && (collisionType == T || collisionType == L || collisionType == R || collisionType == B && !playerComponent.completedUp)
			
			if (player1) res.PLAYER = 1
			if (player2) res.PLAYER = 2

			if (npcL) if (res.NPC.includes(L) == false) res.NPC.push(L)
			if (npcR) if (res.NPC.includes(R) == false) res.NPC.push(R)

			if (nссL) if (res.NCC.includes(L) == false) res.NCC.push(L)
			if (nссR) if (res.NCC.includes(R) == false) res.NCC.push(R)
			if (nссT) if (res.NCC.includes(T) == false) res.NCC.push(T)
			if (nссB) if (res.NCC.includes(B) == false) res.NCC.push(B)

			if (nссT) res.OFFSET.dy = collisionOffset
			if (nссL || nссR || npcL || npcR) res.OFFSET.dx = collisionOffset
		}
	
		/* (@res.PLAYER = 1 DIE) */
		/* (@res.PLAYER = 2 STOMP) */
		/* (@res.NCC = [L,R,T,B]) */
		/* (@res.NPC = [L,R]) */
		/* (@res.PIT = [L,R]) */
		/* (@res.OFFSET {dx, dy} */
		return res
	}

	lookForActions(scene) {
		let state;
		const [playerComponentIdentifier, T, L, R, B] = ['player', 'T', 'L', 'R', 'B']

		const collidedPlayer = scene => {
			let collided = false
			state = this.lookForCollisions(scene)
			if (state.PLAYER == 1 || state.PLAYER == 2) collided = true
			if (state.PLAYER == 1) scene.getBindedComponent(playerComponentIdentifier).die(scene)
			if (state.PLAYER == 2) scene.getBindedComponent(playerComponentIdentifier).collideNPC(scene, this.scoreValue)
			if (state.PLAYER == 2) this.stomp()
			return collided
		}

		if (collidedPlayer(scene)) return false
		else {
			const [NCCL, NCCR, NCCT, NPCL, NPCR] = [state.NCC.includes(L), state.NCC.includes(R), state.NCC.includes(T), state.NPC.includes(L), state.NPC.includes(R)]
			if (this.direction == 1 && (NCCL || NPCL)) this.direction = 0
			if (this.direction == 0 && (NCCR || NPCR)) this.direction = 1
			if (NCCL || NCCR) {
				this.moveX(state.OFFSET.dx)
				if (NCCT) state = this.lookForCollisions(scene)
			}
		}

		if (state.NCC.includes(T) == false) {
			this.moveY(this.dy)
			if (collidedPlayer(scene)) return false
			else {
				if (state.NCC.includes(T)) this.moveY(state.OFFSET.dy)
			}
		}
	}
}

export default NPC