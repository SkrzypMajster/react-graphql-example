import {Typography} from "@mui/material";
import {LocationsListContainer} from "../../components/LocationsList/LocationsListContainer";

export const LocationsListView = () => (
    <div>
        <Typography variant="h4" sx={{ marginBottom: 4 }}>Locations list</Typography>
        <LocationsListContainer />
    </div>
);
