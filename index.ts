// ! Recuerden hacer export de cada interface
// ! que necesiten exponer para ser consumida
// ! por las aplicaciones de Ionic y Angular

export {Administrator, DriverAlert, PanicModeAlert} from './src/admin';
export {Customer, FavoriteLocation} from './src/customer';
export {Driver, DriverLocation, DriverAccountStatus, DriverDocuments, DriverDocumentsStatus, DriverStatus} from './src/driver';
export {AlertType, AuthorType, PaymentMethod, UserStatus} from './src/other/enums';
export {OrganizationSetting} from './src/other/organization-setting';
export {Review} from './src/other/review';
export {Trip, TripLocation} from './src/trip';

export enum FirestoreCollections {
  /** Coleccion de {@link Administrator} */
  administrators = 'administrators',

  /** Coleccion de {@link Customer} */
  customers = 'customers',

  /** Coleccion de {@link Driver} */
  drivers = 'drivers',

  /** Coleccion de {@link DriverLocation} */
  driverLocation = 'driverLocation',

  /** Coleccion de {@link DriverAlert} */
  driverAlerts = 'driverAlerts',

  /** Coleccion de {@link DriverDocuments} */
  driverDocuments = 'driverDocuments',

  /** Coleccion de {@link DriverDocumentsStatus} */
  driverDocumentsStatus = 'driverDocumentsStatus',

  /** Coleccion de {@link DriverStatus} */
  driverStatus = 'driverStatus',

  /** Coleccion de {@link FavoriteLocation} */
  favoriteLocations = 'favoriteLocations',

  /** Coleccion de {@link OrganizationSetting} */
  organizationSettings = 'organizationSettings',

  /** Coleccion de {@link PanicModeAlert} */
  panicModeAlerts = 'panicModeAlerts',

  /** Coleccion de {@link Trip} */
  trips = 'trips',

  /** Coleccion de {@link Review} */
  reviews = 'reviews'
}
