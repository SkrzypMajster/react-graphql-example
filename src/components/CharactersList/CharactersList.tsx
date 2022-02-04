import {ChangeEvent} from "react";
import {Box, Pagination} from "@mui/material";

import {CharactersListItem} from "../../hooks/useCharacters/useCharacters.types";
import {CharacterListItem} from "../CharacterListItem/CharacterListItem";
import {CharactersListProps} from "./CharactersList.types";
import {BaseLink} from "../BaseLink/BaseLink";

export const CharactersList = ({characters, pagesCount, page, onChangePage}: CharactersListProps) => {
    const handleOnChange = (event: ChangeEvent<unknown>, value: number) => {
        onChangePage(value);
    };

    return (
        <Box>
            <Box sx={{display: 'flex', gap: 3, flexWrap: 'wrap'}}>
                {
                    characters.map((character: CharactersListItem) => (
                        <BaseLink path={`/characters/${character.id}`} key={character.id}>
                            <CharacterListItem name={character.name} image={character.image}/>
                        </BaseLink>
                    ))
                }
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Pagination
                    sx={{marginTop: 4}}
                    variant="outlined"
                    shape="rounded"
                    count={pagesCount}
                    page={page}
                    onChange={handleOnChange}
                />
            </Box>
        </Box>
    )
}
