import {useContext, useEffect, useState} from "react";
import {Alert, AlertTitle, LinearProgress} from "@mui/material";

import {useGetLocationsLazyQuery} from "../../graphql";
import {LocationsList} from "./LocationsList";
import {SearchContext} from "../../context/search/SearchContext";

export const LocationsListContainer = () => {
    const { search: filter } = useContext(SearchContext);
    const [page, setPage] = useState(1);
    const [fetchLocations, {loading, error, data}] = useGetLocationsLazyQuery({
        variables: { page, filter }
    });

    useEffect(() => {
        setPage(1);
    }, [filter]);

    useEffect(() => {
        fetchLocations({variables: {page, filter}})
    }, [fetchLocations, page, filter]);

    const handleOnChangePage = (newPage: number) => {
        setPage(newPage);
        window.scrollTo(0, 0);
    };

    if (loading) {
        return <LinearProgress/>;
    }

    if (error || !data || !data.locations?.results) {
        return (
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Something went wrong with fetching locations list. Please try again later!
            </Alert>
        );
    }

    return <LocationsList
        page={page}
        count={data.locations?.info?.count || 0}
        locations={data.locations.results}
        onChangePage={handleOnChangePage}
    />
}
