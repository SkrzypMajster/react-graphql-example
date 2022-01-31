import {Paper, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {HomepageTileProps} from "./HomepageTile.types";

export const HomepageTile = ({path, title, subtitle}: HomepageTileProps) => (
    <Link to={path} style={{textDecoration: 'none', color: '#000'}}>
        <Paper elevation={6} sx={{padding: 5}}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="subtitle1">{subtitle}</Typography>
        </Paper>
    </Link>
);
