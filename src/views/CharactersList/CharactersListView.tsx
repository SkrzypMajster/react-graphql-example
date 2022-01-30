import {Typography} from "@mui/material";

import {CharactersListContainer} from "../../components/CharactersList/CharactersListContainer";

export const CharactersListView = () => {
    return <div>
        <Typography variant="h4" sx={{ marginBottom: 4 }}>Characters list</Typography>
        <CharactersListContainer />
    </div>
};
