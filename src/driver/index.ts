import {Trip} from '../trip';

/**
 * Usuaria Taxista
 */
export interface Driver {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  photoUrl: string;
  ratingAvg: number;
  plate: string;
  amountOfRatings: number;
}

/**
 * Interfaz para obtener la última localización por GPS de la taxista
 * al igual que la fecha donde se actualizó, usando coordenadas.
 */
export interface DriverLocation {
  longitude: number;
  latitude: number;
  updated: number;
}

export type DriverAccountStatus =
  | 'pending'
  | 'available'
  | 'unavailable'
  | 'expiredDocs'
  | 'denied'
  | 'onCustomerPickup'
  | 'onTrip'
  | 'onCustomerReview';

/**
 * Status de la usuaria taxista
 */
export interface DriverStatus {
  id: string;
  created: number;
  updated: number;
  /** {@link DriverAccountStatus} */
  driverAccountStatus: DriverAccountStatus;
  currentTripId: string;
  currentLocation: DriverLocation;
  lastTrip?: Trip;
}

/**
 * Documentos de una usuaria taxista. Su id sera el mismo
 * id generado por el modulo de Autenticacion de Firebase usado
 * en {@link Driver}
 */
export interface DriverDocuments {
  created: number;
  idUrl: string;
  idExpiration: number;
  license: string;
  licenseUrl: string;
  licenseExpiration: number;
  insuranceUrl: string;
  insuranceExpiration: number;
  rtvUrl: string;
  rtvExpiration: number;
  propertyUrl: string;
  plateUrl: string;
  carPermitUrl: string;
  carPermitExpiration: number;
  criminalRecordUrl: string;
  carFrontViewUrl: string;
  carLeftViewUrl: string;
  carRightViewUrl: string;
  carBackViewUrl: string;
}

/**
 * Estado de aprobación de los documentos de una usuaria taxista.
 * True para aprobados, false para rechazados.
 * Los campos de las fechas expiradas no necesitan guardarse, puesto que pueden ser deducidas comparando fechas.
 * en {@link Driver}
 */
export interface DriverDocumentsStatus {
  documentsAboutToExpire: boolean;
  id: boolean;
  insurance: boolean;
  property: boolean;
  license: boolean;
  plate: boolean;
  criminalRecord: boolean;
  RTV: boolean;
  carPermit: boolean;
  carFrontView: boolean;
  carLeftView: boolean;
  carRightView: boolean;
  carBackView: boolean;
}
