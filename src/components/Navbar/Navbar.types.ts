export type NavbarItem = {
    label: string;
    path: string;
};

export type NavbarProps = {
    title: string;
    items: NavbarItem[];
};
