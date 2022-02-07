import {useContext, useEffect, useState} from "react";
import {Alert, AlertTitle, LinearProgress} from "@mui/material";

import {useGetEpisodesLazyQuery} from "../../graphql";
import {EpisodesList} from "./EpisodesList";
import {SearchContext} from "../../context/search/SearchContext";

export const EpisodesListContainer = () => {
    const { search: filter } = useContext(SearchContext);
    const [page, setPage] = useState(1);
    const [fetchEpisodes, {loading, error, data}] = useGetEpisodesLazyQuery({
        variables: { page, filter }
    });

    useEffect(() => {
        setPage(1);
    }, [filter]);

    useEffect(() => {
        fetchEpisodes({variables: {page, filter}})
    }, [fetchEpisodes, page, filter]);

    const handleOnChangePage = (newPage: number) => {
        setPage(newPage);
        window.scrollTo(0, 0);
    };

    if (loading) {
        return <LinearProgress/>;
    }

    if (error || !data) {
        return (
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Something went wrong with fetching episodes list. Please try again later!
            </Alert>
        );
    }

    return <EpisodesList
        page={page}
        count={data.episodes?.info?.count || 0}
        episodes={data.episodes?.results || []}
        onChangePage={handleOnChangePage}
    />
}
