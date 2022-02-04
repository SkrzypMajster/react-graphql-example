import {BrowserRouter as Router} from "react-router-dom";

import {AppProvidersProps} from "./AppProviders.types";
import {GraphqlProvider} from "./graphql/GraphqlProvider";
import {SearchProvider} from "../context/search/SearchProvider";

export const AppProviders = ({children}: AppProvidersProps) => (
    <SearchProvider>
        <GraphqlProvider>
            <Router>
                {children}
            </Router>
        </GraphqlProvider>
    </SearchProvider>
);
