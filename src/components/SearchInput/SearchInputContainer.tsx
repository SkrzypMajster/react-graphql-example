import React, {ChangeEvent, useContext, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {SearchInput} from "./SearchInput";
import {SearchContext} from "../../context/search/SearchContext";
import {debounce} from "@mui/material";

const SEARCH_ENABLED_PATHS = ['/characters', '/episodes', '/locations'];
const DEBOUNCE_TIME_MS = 500;

export const SearchInputContainer = () => {
    const location = useLocation();
    const {setSearch} = useContext(SearchContext);
    const [searchValue, setSearchValue] = useState('');
    const [searchDisabled, setSearchDisabled] = useState(false);

    const debouncedSearch = React.useRef(debounce((value) => {
        setSearch(value)
    }, DEBOUNCE_TIME_MS)).current;

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (searchDisabled) {
            return;
        }

        const value = event.target.value;
        setSearchValue(value);
        debouncedSearch(value);
    }

    useEffect(() => {
        setSearchDisabled(!SEARCH_ENABLED_PATHS.includes(location.pathname));

        setSearchValue('');
        debouncedSearch('');
    }, [debouncedSearch, location]);

    return !searchDisabled ? <SearchInput value={searchValue} onChange={handleOnChange}/> : null;
};
