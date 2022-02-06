import {ChangeEvent} from "react";
import {Alert, Box, Pagination} from "@mui/material";

import {CharacterListItem} from "../CharacterListItem/CharacterListItem";
import {CharactersListProps, CharactersListType} from "./CharactersList.types";
import {BaseLink} from "../BaseLink/BaseLink";
import {Character, Maybe} from "../../graphql";

const renderCharacterListItem = (character: Maybe<Character>) => {
    if (!character?.id || !character?.image) {
        return;
    }

    return (
        <BaseLink path={`/characters/${character.id}`} key={character.id}>
            <CharacterListItem name={character.name || '-'} image={character.image}/>
        </BaseLink>
    );
}

const renderCharactersList = (characters: CharactersListType) => {
    if (!characters) {
        return <Alert severity="info">Characters list is empty!</Alert>;
    }

    return characters.map((character) => renderCharacterListItem(character));
}

export const CharactersList = ({characters, pagesCount, page, onChangePage}: CharactersListProps) => {
    const handleOnChange = (event: ChangeEvent<unknown>, value: number) => {
        onChangePage(value);
    };

    return (
        <Box>
            <Box sx={{display: 'flex', gap: 3, flexWrap: 'wrap'}}>
                {renderCharactersList(characters)}
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
