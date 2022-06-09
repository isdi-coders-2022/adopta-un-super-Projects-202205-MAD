import { ReactElement } from 'react';

export interface iMenuItem {
    path: string;
    label: any;
    page: ReactElement;
}

export type aMenuItems = Array<iMenuItem>;
