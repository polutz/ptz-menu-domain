export interface IMenuItem {
    label: string;
    link?: string;
    subItems?: IMenuItem[];
    role?: string;
}

export interface IMenu {
    label: string;
    items: IMenuItem[];
}
