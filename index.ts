export {AlertType, AuthorType, PaymentMethod, UserStatus} from './src/other/enums';
export {OrganizationSetting} from './src/other/organization-setting';
export {Review} from './src/other/review';

export {Administrator, DriverAlert, PanicModeAlert} from './src/admin';

export {Customer, FavoriteLocation} from './src/customer';

export {Driver, DriverAccountStatus, DriverDocuments, DriverStatus} from './src/driver';

export {Trip, TripLocation} from './src/trip';

export enum FirestoreCollections {
  administrator = 'administrators',
  /** Coleccion de {@link Customer} */
  customers = 'customers',
  drivers = 'drivers',
  driverAlerts = 'driverAlerts',
  driverDocuments = 'driverDocuments',
  driverStatus = 'driverStatus',
  favoriteLocations = 'favoriteLocations',
  organizationSettings = 'organizationSettings',
  panicModeAlerts = 'panicModeAlerts',
  trips = 'trips',
  reviews = 'reviews'
}
