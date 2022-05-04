import {AuthorType} from './enums';

export interface Review {
  driverId: string;
  customerId: string;
  tripId: string;
  comments: string;
  rating: number;
  reviewAuthor: AuthorType;
}
