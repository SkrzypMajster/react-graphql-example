import {ReactNode} from "react";

export type SearchState = {
    search: string;
    setSearch: (value: string) => void;
}

export type SearchProviderProps = {
    children: ReactNode;
};
