import {useState} from "react";
import {Alert, AlertTitle, LinearProgress} from "@mui/material";

import {useLocations} from "../../hooks/useLocations/useLocations";
import {LocationsList} from "./LocationsList";

export const LocationsListContainer = () => {
    const [page, setPage] = useState(1);
    const {loading, error, data} = useLocations({ page });

    const handleOnChangePage = (newPage: number) => {
        setPage(newPage);
        window.scrollTo(0, 0);
    };

    if (loading) {
        return <LinearProgress/>;
    }

    if (error || !data || !data.locations.results) {
        return (
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Something went wrong with fetching locations list. Please try again later!
            </Alert>
        );
    }

    return <LocationsList
        page={page}
        count={data.locations.info.count}
        locations={data.locations.results}
        onChangePage={handleOnChangePage}
    />
}
