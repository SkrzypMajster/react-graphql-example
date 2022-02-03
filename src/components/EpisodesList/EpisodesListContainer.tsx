import {useState} from "react";
import {Alert, AlertTitle, LinearProgress} from "@mui/material";

import {useEpisodes} from "../../hooks/useEpisodes/useEpisodes";
import {EpisodesList} from "./EpisodesList";

export const EpisodesListContainer = () => {
    const [page, setPage] = useState(1);
    const {loading, error, data} = useEpisodes({ page });

    const handleOnChangePage = (newPage: number) => {
        setPage(newPage);
        window.scrollTo(0, 0);
    };

    if (loading) {
        return <LinearProgress/>;
    }

    if (error || !data || !data.episodes.results) {
        return (
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Something went wrong with fetching characters list. Please try again later!
            </Alert>
        );
    }

    return <EpisodesList
        page={page}
        count={data.episodes.info.count}
        episodes={data.episodes.results}
        onChangePage={handleOnChangePage}
    />
}
