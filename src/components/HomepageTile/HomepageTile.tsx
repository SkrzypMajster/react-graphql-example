import {Paper, Typography} from "@mui/material";

import {HomepageTileProps} from "./HomepageTile.types";
import {BaseLink} from "../BaseLink/BaseLink";

export const HomepageTile = ({path, title, subtitle}: HomepageTileProps) => (
    <BaseLink path={path}>
        <Paper elevation={6} sx={{padding: 5}}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="subtitle1">{subtitle}</Typography>
        </Paper>
    </BaseLink>
);
