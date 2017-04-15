interface IMenuItem {
    label: string;
    link: string;
}

interface IMenu {
    label: string;
    items: IMenuItem[];
}
