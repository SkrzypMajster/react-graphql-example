import { createContext } from 'react';

import {SearchState} from "./SearchContext.types";

export const SearchContext = createContext<SearchState>({ search: '', setSearch: () => {} });
