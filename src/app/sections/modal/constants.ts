import { InjectionToken } from '@angular/core';

export const CONTAINER_DATA = new InjectionToken<{}>('CONTAINER_DATA');

export interface InjectionData {
    closeModal: () => void;
}
