import {EpisodesListItem} from "../../hooks/useEpisodes/useEpisodes.types";

export type EpisodesListProps = {
    page: number;
    count: number;
    episodes: EpisodesListItem[];
    onChangePage: (page: number) => void;
};
