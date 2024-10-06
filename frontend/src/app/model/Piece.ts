import {Dimension} from './Dimension';
import {InvolvedInAction} from './InvolvedInAction';

export interface Piece {
    pieceId: string;
    grossWeight?: string;
    goodsDescription?: string;
    specialHandlingCodes?: string;
    dimensions?: Dimension;
    cargoStatus?: string;
    transportIdentifier?: string;
    exceptionReason?: string;
    involvedInActions?: InvolvedInAction[];
}
