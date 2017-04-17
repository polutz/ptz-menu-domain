export interface IMenuItem {
    label: string;
    link?: string;
    subItems?: IMenuItem[];
    roles?: string;
}

export interface IMenu {
    label: string;
    items: IMenuItem[];
}
