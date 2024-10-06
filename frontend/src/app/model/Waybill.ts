import {Shipment} from './Shipment';

export interface Waybill {
    waybillPrefix?: string;
    waybillnumber?: string;
    shipment?: Shipment;
    source?: string;
    destination?: string;
}