import {useContext, useEffect, useState} from "react";
import {Alert, AlertTitle, LinearProgress} from "@mui/material";

import {useCharacters} from "../../hooks/useCharacters/useCharacters";
import {SearchContext} from "../../context/search/SearchContext";
import {CharactersList} from "./CharactersList";

export const CharactersListContainer = () => {
    const {search: filter} = useContext(SearchContext);
    const [page, setPage] = useState(1);
    const {fetchCharacters, loading, error, data} = useCharacters({page, filter});

    useEffect(() => {
        setPage(1);
    }, [filter]);

    useEffect(() => {
        fetchCharacters({variables: {page, filter}});
    }, [fetchCharacters, page, filter]);

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
                Something went wrong with fetching characters list. Please try again later!
            </Alert>
        );
    }

    return <CharactersList
        page={page}
        characters={data.characters ? data.characters.results : []}
        pagesCount={data.characters ? data.characters.info.pages : 0}
        onChangePage={handleOnChangePage}
    />
};
