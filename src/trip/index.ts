import {PaymentMethod} from '../other/enums';

export interface TripLocation {
  date: number;
  longitude: number;
  latitude: number;
  fullAddress: string;
}

export interface Trip {
  tripId: string;
  customerId: string;
  driverId: string;
  from: TripLocation;
  to: TripLocation;
  price: number;
  date: number;
  distanceTraveled: number;
  paymentMethod: PaymentMethod;
  inProgress: boolean;
}
