import {ChangeEvent} from "react";

export type NavbarProps = {
    title: string;
    items: string[];
    onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
};
