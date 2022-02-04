import {useState} from "react";

import {SearchContext} from "./SearchContext";
import {SearchProviderProps} from "./SearchContext.types";

export const SearchProvider = (props: SearchProviderProps) => {
    const [search, setSearch] = useState("");

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            {props.children}
        </SearchContext.Provider>
    )
};

