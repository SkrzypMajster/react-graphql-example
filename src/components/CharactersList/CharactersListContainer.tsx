import {useState} from "react";

import {useCharacters} from "../../hooks/useCharacters/useCharacters";
import {CharactersList} from "./CharactersList";
import {Alert, AlertTitle, LinearProgress} from "@mui/material";

export const CharactersListContainer = () => {
    const [page, setPage] = useState(1);
    const {loading, error, data} = useCharacters({ page });

    const handleOnChangePage = (newPage: number) => {
        setPage(newPage);
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
        characters={data.characters.results}
        pagesCount={data.characters.info.pages}
        onChangePage={handleOnChangePage}
    />
};
