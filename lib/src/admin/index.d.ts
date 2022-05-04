import { AlertType, AuthorType } from '../other/enums';
/**
 * Representa un usuario administrador del sistema (la controladora)
 */
export interface Administrator {
    email: string;
    firstName: string;
    lastName: string;
}
/**
 * Alertas de taxistas, SIN modo panico
 */
export interface DriverAlert {
    /** {@link AlertType} */
    type: AlertType;
    userEmail: string;
    priority: number;
    created: number;
    seen: boolean;
}
/**
 * Alertas de Modo Panico activado
 */
export interface PanicModeAlert {
    userId: string;
    latitude: number;
    longitude: number;
    /** {@link AuthorType} */
    userType: AuthorType;
    created: number;
    updated: number;
    resolved: boolean;
}
