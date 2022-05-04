import { PaymentMethod } from '../other/enums';
/**
 * Representa una ubicacion en un viaje.
 * Va empotrada en un {@link Trip} y no
 * tiene su propia coleccion
 */
export interface TripLocation {
    date: number;
    longitude: number;
    latitude: number;
    fullAddress: string;
}
/**
 * Representa un viaje.  Id autogenerado
 */
export interface Trip {
    /** Id del viaje (4 o 5 digitos, para facilidad para las usuarias) */
    tripId: string;
    /** Document Id del {@link Customer} */
    customerId: string;
    /** Document Id del {@link Driver} */
    driverId: string;
    /** {@link TripLocation} */
    from: TripLocation;
    /** {@link TripLocation} */
    to: TripLocation;
    price: number;
    date: number;
    distanceTraveled: number;
    /** {@link PaymentMethod} */
    paymentMethod: PaymentMethod;
    inProgress: boolean;
}
