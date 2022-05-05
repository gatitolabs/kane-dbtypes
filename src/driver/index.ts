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
}

export type DriverAccountStatus =
  | 'pending'
  | 'available'
  | 'unavailable'
  | 'expiredDocs'
  | 'denied'
  | 'onTrip';

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
