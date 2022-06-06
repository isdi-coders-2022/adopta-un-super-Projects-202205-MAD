import { ReactElement } from 'react';

export interface iMenuItem {
    path: string;
    label: string;
    page: ReactElement;
}

export type aMenuItems = Array<iMenuItem>;
