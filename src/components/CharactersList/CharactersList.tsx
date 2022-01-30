import {ChangeEvent} from "react";
import {Box, Pagination} from "@mui/material";

import {CharacterListItem} from "../CharacterListItem/CharacterListItem";
import {CharactersListProps} from "./CharactersList.types";

export const CharactersList = ({characters, pagesCount, page, onChangePage}: CharactersListProps) => {
    const handleOnChange = (event: ChangeEvent<unknown>, value: number) => {
        onChangePage(value);
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap'}}>
                {
                    characters.map((character: { name: string, image: string }) => (
                        <CharacterListItem key={character.name} name={character.name} image={character.image}/>
                    ))
                }
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                <Pagination
                    sx={{ marginTop: 4 }}
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
