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

export interface DriverStatus {
  id: string;
  created: number;
  updated: number;
  driverAccountStatus: DriverAccountStatus;
  currentTripId: string;
}

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
