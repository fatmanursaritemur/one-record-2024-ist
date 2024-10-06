import {MenuItem} from "primeng/api";


export interface WidectPiece {
  pieceId: string;
  grossWeight: string;
  goodsDescription: string;
  product: Product;
  shipper: Shipper;
  consignee: Consignee;
  msds: Status;
  customsCheck: Status;
  bookingStatus: BooleanStatus;
  version: number;
  status: GeneralStatus;
  isAfterMsdsOk: boolean;
  parcelStatus: string;
}

export interface Flight {
  destination: string;
  flightNumber: string;
  flightStatus: string;
  arrival: string;
  color: string;
}

export interface Message {
  id: string;

}


export interface Product {
  hsCode: HsCode;
  unNumber: string;
  sensor: Sensor;
}

export interface HsCode {
  code: string;
  codeListName: string;
}

export interface Sensor {
  description: string;
  sensorType: string;
  name: string;
}

export interface BasedAtLocation {
  code: string;
  locationName: string;
  cityCode: string;
  postalCode: string;
  locationType: string;
}

export interface Shipper {
  basedAtLocation: BasedAtLocation;
  name: string;
  textualValue: string;
}

export interface Consignee {
  basedAtLocation: BasedAtLocation;
  name: string;
  textualValue: string;
}

export enum Status {
  CHECK = 'Warning!',
  VERIFIED = 'Confirmed',
  NOT_VERIFIED = 'Not Check',
  UNDEFINED = "Undefined",
  DENIED = "Denied"
}

export enum GeneralStatus {
  INITIAL,
  MSDS_REQUEST,
  MSDS_CHECK,
  UN_CHECK,
  PRE_FILLING,
  DG_DECLARATION,
  TK_BOOKING,
  EXECUTE_AWB

}

export enum BooleanStatus {
  True = 'Check',
  False = 'Uncheck'
}
