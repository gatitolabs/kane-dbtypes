import {PaymentMethod, UserStatus} from '../other/enums';

/**
 * Representa una usuaria del servicio.  Su id sera el mismo
 * id generado por el modulo de Autenticacion de Firebase
 */
export interface Customer {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  /** {@link PaymentMethod} */
  paymentMethod: PaymentMethod;
  photoUrl: string;
  /** {@link UserStatus} */
  status: UserStatus;
  currentTripId: string;
  ratingAvg: number;
}

/**
 * Lugares favoritos de las usuarias. Id autogenerado
 */
export interface FavoriteLocation {
  /** Document Id del {@link Customer} a quien pertenece este lugar favorito */
  customerId: string;
  name: string;
  longitude: number;
  latitude: number;
}
