export interface IMenuItem {
    label: string;
    link: string;
}

export interface IMenu {
    label: string;
    items: IMenuItem[];
}
