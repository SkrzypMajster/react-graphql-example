import {Link} from "react-router-dom";

import {BaseLinkProps} from "./BaseLink.types";

export const BaseLink = ({path, children}: BaseLinkProps) => (
    <Link to={path} style={{textDecoration: 'none', color: '#000'}}>
        {children}
    </Link>
);
