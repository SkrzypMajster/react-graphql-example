import {AppProvidersProps} from "./AppProviders.types";
import {GraphqlProvider} from "./graphql/GraphqlProvider";

export const AppProviders = ({children}: AppProvidersProps) => (
    <GraphqlProvider>
        {children}
    </GraphqlProvider>
);
