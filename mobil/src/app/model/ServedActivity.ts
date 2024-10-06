import {MovementTime} from './MovementTime';

export interface ServedActivity {
    transportIdentifier?: string;
    movementTimes?: MovementTime[];
}