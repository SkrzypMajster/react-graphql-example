import {ChangeEvent} from "react";

export type NavbarItem = {
    label: string;
    path: string;
};

export type NavbarProps = {
    title: string;
    items: NavbarItem[];
    onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
};
