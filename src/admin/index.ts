import {AlertType, AuthorType} from '../other/enums';

export interface Administrator {
  email: string;
  firstName: string;
  lastName: string;
}

export interface DriverAlert {
  type: AlertType;
  userEmail: string;
  priority: number;
  created: number;
  seen: boolean;
}

export interface PanicModeAlert {
  userId: string;
  latitude: number;
  longitude: number;
  userType: AuthorType;
  created: number;
  updated: number;
  resolved: boolean;
}
