import {AuthorType} from './enums';

/**
 * Review de usuaria a taxista o de taxista a usuaria
 */
export interface Review {
  /** Document Id del {@link Driver} asociado a este review */
  driverId: string;
  /** Document Id del {@link Customer} asociado a este review */
  customerId: string;
  tripId: string;
  comments: string;
  rating: number;
  /** {@link AuthorType} */
  reviewAuthor: AuthorType;
  score: number;
}
