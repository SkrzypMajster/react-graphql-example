import {BrowserRouter as Router} from "react-router-dom";

import {AppProvidersProps} from "./AppProviders.types";
import {GraphqlProvider} from "./graphql/GraphqlProvider";

export const AppProviders = ({children}: AppProvidersProps) => (
    <GraphqlProvider>
        <Router>
            {children}
        </Router>
    </GraphqlProvider>
);
