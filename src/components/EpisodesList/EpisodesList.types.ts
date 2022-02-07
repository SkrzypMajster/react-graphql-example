export type EpisodesListProps = {
    page: number;
    count: number;
    episodes: any[];
    onChangePage: (page: number) => void;
};
