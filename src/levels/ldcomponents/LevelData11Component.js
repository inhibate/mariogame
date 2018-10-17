
import CanvasComponent from '../../canvasComponent'

import TTC from '../lcomponents/TriangleTileComponent'
import QBC from '../lcomponents/QuestionBlockComponent'
import BBC from '../lcomponents/BrickBlockComponent'
import PBC from '../lcomponents/PipeBlockComponent'
import FBC from '../lcomponents/FloorBlockComponent'

import PC from '../lcomponents/PlayerComponent'

import {LEVELBGPATH, SCENEW, SCENEH} from '../../misc'

export default class Level11DataComponent {
	constructor() {

		const [FEx, FEy, FLOORH, delta] = [512, 270, 50, 32]

		this._components = {
			
			'bg': new CanvasComponent(SCENEW, SCENEH, `${LEVELBGPATH}/1-1.png`, 0, 0, 'image'),

			'fbc1': new FBC(0, SCENEH - FLOORH, delta * 69, FLOORH),

			'fbc2': new FBC(delta * 71, SCENEH - FLOORH, delta * 15, FLOORH),

			'fbc3': new FBC(delta * (71 + 15 + 3), SCENEH - FLOORH, delta * 64, FLOORH),

			'fbc4': new FBC(delta * (71 + 15 + 3 + 64 + 2), SCENEH - FLOORH, delta * 57, FLOORH),

			'qbc1': new QBC(FEx, FEy),

			'qbc2': new QBC(FEx + delta * 5, FEy),

			'qbc3': new QBC(FEx + delta * 6, FEy - delta * 4),

			'qbc4': new QBC(FEx + delta * 7, FEy),
 			
 			'bbc1': new BBC(FEx + delta * 4, FEy),
			
 			'bbc2': new BBC(FEx + delta * 6, FEy),
			
 			'bbc3': new BBC(FEx + delta * 8, FEy),
			
			'pbc1': new PBC(FEx + delta * 12, FEy + delta * 2, [1, 1]),

			'pbc2': new PBC(FEx + delta * 22, FEy + delta, [2, 1]),

			'pbc3': new PBC(FEx + delta * 30, FEy, [3, 1]),

			'pbc4': new PBC(FEx + delta * 41, FEy, [3, 1]),

 			'bbc4': new BBC(FEx + delta * 61, FEy),

 			'bbc5': new BBC(FEx + delta * 63, FEy),

			'qbc5': new QBC(FEx + delta * 62, FEy),

 			'bbc6': new BBC(FEx + delta * 64, FEy - delta * 4),

 			'bbc7': new BBC(FEx + delta * 65, FEy - delta * 4),

 			'bbc8': new BBC(FEx + delta * 66, FEy - delta * 4),

 			'bbc9': new BBC(FEx + delta * 67, FEy - delta * 4),

 			'bbc10': new BBC(FEx + delta * 68, FEy - delta * 4),

 			'bbc11': new BBC(FEx + delta * 69, FEy - delta * 4),

 			'bbc12': new BBC(FEx + delta * 70, FEy - delta * 4),

 			'bbc13': new BBC(FEx + delta * 71, FEy - delta * 4),

 			'bbc14': new BBC(FEx + delta * 75, FEy - delta * 4),

 			'bbc15': new BBC(FEx + delta * 76, FEy - delta * 4),

 			'bbc16': new BBC(FEx + delta * 77, FEy - delta * 4),
			
			'qbc6': new QBC(FEx + delta * 78, FEy - delta * 4),

 			'bbc17': new BBC(FEx + delta * 78, FEy),

 			'bbc18': new BBC(FEx + delta * 84, FEy),

 			'bbc19': new BBC(FEx + delta * 85, FEy),

			'qbc7': new QBC(FEx + delta * 93, FEy - delta * 4),
 
			'qbc8': new QBC(FEx + delta * 93, FEy),

			'qbc9': new QBC(FEx + delta * 90, FEy),

			'qbc10': new QBC(FEx + delta * 96, FEy),
 
 			'bbc20': new BBC(FEx + delta * 102, FEy),
 
 			'bbc21': new BBC(FEx + delta * 105, FEy - delta * 4),

 			'bbc22': new BBC(FEx + delta * 106, FEy - delta * 4),
 
 			'bbc23': new BBC(FEx + delta * 107, FEy - delta * 4),
 
 			'bbc24': new BBC(FEx + delta * 112, FEy - delta * 4),
 
 			'bbc25': new BBC(FEx + delta * 115, FEy - delta * 4),
 
 			'bbc26': new BBC(FEx + delta * 114, FEy),
			
 			'bbc27': new BBC(FEx + delta * 113, FEy),

			'qbc11': new QBC(FEx + delta * 113, FEy - delta * 4),

			'qbc12': new QBC(FEx + delta * 114, FEy - delta * 4),

			'ttc1': new TTC(FEx + delta * 121, FEy),

			'ttc2': new TTC(FEx + delta * 121, FEy + delta * 1),

			'ttc3': new TTC(FEx + delta * 121, FEy + delta * 2),

			'ttc4': new TTC(FEx + delta * 121, FEy + delta * 3),

			'ttc5': new TTC(FEx + delta * 120, FEy + delta * 1),

			'ttc6': new TTC(FEx + delta * 119, FEy + delta * 2),

			'ttc7': new TTC(FEx + delta * 118, FEy + delta * 3),

			'ttc8': new TTC(FEx + delta * 119, FEy + delta * 3),

			'ttc9': new TTC(FEx + delta * 120, FEy + delta * 3),

			'ttc10': new TTC(FEx + delta * 120, FEy + delta * 2),
			
			'ttc11': new TTC(FEx + delta * 124, FEy),

			'ttc12': new TTC(FEx + delta * 124, FEy + delta * 1),

			'ttc13': new TTC(FEx + delta * 124, FEy + delta * 2),

			'ttc14': new TTC(FEx + delta * 124, FEy + delta * 3),
			
			'ttc15': new TTC(FEx + delta * 125, FEy + delta * 1),
			
			'ttc16': new TTC(FEx + delta * 125, FEy + delta * 2),

			'ttc17': new TTC(FEx + delta * 125, FEy + delta * 3),

			'ttc18': new TTC(FEx + delta * 126, FEy + delta * 3),

			'ttc19': new TTC(FEx + delta * 126, FEy + delta * 2),

			'ttc20': new TTC(FEx + delta * 127, FEy + delta * 3),

			'ttc21': new TTC(FEx + delta * 139, FEy),

			'ttc22': new TTC(FEx + delta * 139, FEy + delta * 1),

			'ttc23': new TTC(FEx + delta * 139, FEy + delta * 2), 

			'ttc24': new TTC(FEx + delta * 139, FEy + delta * 3), 

			'ttc25': new TTC(FEx + delta * 140, FEy + delta * 1), 

			'ttc26': new TTC(FEx + delta * 140, FEy + delta * 2), 

			'ttc27': new TTC(FEx + delta * 140, FEy + delta * 3), 

			'ttc28': new TTC(FEx + delta * 141, FEy + delta * 3), 

			'ttc29': new TTC(FEx + delta * 141, FEy + delta * 2), 

			'ttc30': new TTC(FEx + delta * 142, FEy + delta * 3), 

			'ttc31': new TTC(FEx + delta * 135, FEy), 

			'ttc32': new TTC(FEx + delta * 135, FEy + delta * 1), 

			'ttc33': new TTC(FEx + delta * 135, FEy + delta * 2), 

			'ttc34': new TTC(FEx + delta * 135, FEy + delta * 3), 
			
			'ttc35': new TTC(FEx + delta * 134, FEy + delta * 1), 
			
			'ttc36': new TTC(FEx + delta * 133, FEy + delta * 2), 

			'ttc37': new TTC(FEx + delta * 132, FEy + delta * 3), 

			'ttc38': new TTC(FEx + delta * 133, FEy + delta * 3), 

			'ttc39': new TTC(FEx + delta * 134, FEy + delta * 3), 

			'ttc40': new TTC(FEx + delta * 134, FEy + delta * 2), 
			
			'ttc41': new TTC(FEx + delta * 136, FEy),
			
			'ttc42': new TTC(FEx + delta * 136, FEy + delta * 1),

			'ttc43': new TTC(FEx + delta * 136, FEy + delta * 2),

			'ttc44': new TTC(FEx + delta * 136, FEy + delta * 3),
 
			'pbc5': new PBC(FEx + delta * 147, FEy + delta * 2, [1, 1]),

			'pbc6': new PBC(FEx + delta * 163, FEy + delta * 2, [1, 1]),

			'bbc28': new BBC(FEx + delta * 155, FEy),

			'bbc29': new BBC(FEx + delta * 153, FEy),

			'bbc30': new BBC(FEx + delta * 152, FEy),

			'qbc13': new QBC(FEx + delta * 154, FEy),

			'ttc45': new TTC(FEx + delta * 165, FEy + delta * 3),

			'ttc46': new TTC(FEx + delta * 166, FEy + delta * 3),

			'ttc47': new TTC(FEx + delta * 167, FEy + delta * 3), 

			'ttc48': new TTC(FEx + delta * 168, FEy + delta * 3), 

			'ttc49': new TTC(FEx + delta * 169, FEy + delta * 3), 

			'ttc50': new TTC(FEx + delta * 170, FEy + delta * 3), 

			'ttc51': new TTC(FEx + delta * 171, FEy + delta * 3), 

			'ttc52': new TTC(FEx + delta * 172, FEy + delta * 3), 

			'ttc53': new TTC(FEx + delta * 173, FEy + delta * 3), 

			'ttc54': new TTC(FEx + delta * 166, FEy + delta * 2), 

			'ttc55': new TTC(FEx + delta * 167, FEy + delta * 2), 

			'ttc56': new TTC(FEx + delta * 168, FEy + delta * 2), 

			'ttc57': new TTC(FEx + delta * 169, FEy + delta * 2), 
 
			'ttc58': new TTC(FEx + delta * 170, FEy + delta * 2), 

			'ttc59': new TTC(FEx + delta * 171, FEy + delta * 2), 

			'ttc60': new TTC(FEx + delta * 172, FEy + delta * 2), 

			'ttc61': new TTC(FEx + delta * 173, FEy + delta * 2),

			'ttc62': new TTC(FEx + delta * 167, FEy + delta),
 
			'ttc63': new TTC(FEx + delta * 168, FEy + delta),

			'ttc64': new TTC(FEx + delta * 169, FEy + delta),

			'ttc65': new TTC(FEx + delta * 170, FEy + delta),

			'ttc66': new TTC(FEx + delta * 171, FEy + delta),
			
			'ttc67': new TTC(FEx + delta * 172, FEy + delta),
			
			'ttc68': new TTC(FEx + delta * 173, FEy + delta),
			
			'ttc69': new TTC(FEx + delta * 168, FEy),
			
			'ttc70': new TTC(FEx + delta * 169, FEy),
			
			'ttc71': new TTC(FEx + delta * 170, FEy),
			
			'ttc72': new TTC(FEx + delta * 171, FEy),
			
			'ttc73': new TTC(FEx + delta * 172, FEy),
			
			'ttc74': new TTC(FEx + delta * 173, FEy),

			'ttc75': new TTC(FEx + delta * 169, FEy - delta * 1),
			
			'ttc76': new TTC(FEx + delta * 170, FEy - delta * 1),
			
			'ttc77': new TTC(FEx + delta * 171, FEy - delta * 1),
			
			'ttc78': new TTC(FEx + delta * 172, FEy - delta * 1),

			'ttc79': new TTC(FEx + delta * 173, FEy - delta * 1),
			
			'ttc80': new TTC(FEx + delta * 170, FEy - delta * 2),
			
			'ttc81': new TTC(FEx + delta * 171, FEy - delta * 2),
			
			'ttc82': new TTC(FEx + delta * 172, FEy - delta * 2),
			
			'ttc83': new TTC(FEx + delta * 173, FEy - delta * 2),
			
			'ttc84': new TTC(FEx + delta * 171, FEy - delta * 3),
			
			'ttc85': new TTC(FEx + delta * 172, FEy - delta * 3),
			
			'ttc86': new TTC(FEx + delta * 173, FEy - delta * 3),
			
			'ttc87': new TTC(FEx + delta * 172, FEy - delta * 4),
			
			'ttc88': new TTC(FEx + delta * 173, FEy - delta * 4),

			'player': new PC(20, SCENEH - FLOORH - delta)
		}

	}
}