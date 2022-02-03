import {Typography} from "@mui/material";
import {EpisodesListContainer} from "../../components/EpisodesList/EpisodesListContainer";

export const EpisodesListView = () => (
    <div>
        <Typography variant="h4" sx={{ marginBottom: 4 }}>Episodes list</Typography>
        <EpisodesListContainer />
    </div>
);
