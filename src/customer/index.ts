import {PaymentMethod, UserStatus} from '../other/enums';

export interface Customer {
  firstName: string;
  lastNAme: string;
  phone: string;
  email: string;
  paymentMethod: PaymentMethod;
  photoUrl: string;
  status: UserStatus;
  currentTripId: string;
  ratingAvg: number;
}

export interface FavoriteLocation {
  customerId: string;
  name: string;
  longitude: number;
  latitude: number;
}
