export type UseEpisodesProps = {
    page?: number;
    fitler?: string
}

export type EpisodesListItem = {
    id: string;
    name: string;
    episode: string;
    air_date: string;
};

export type GetEpisodesQuery = {
    episodes: {
        info: {
            count: number;
            pages: number;
            next: number | null;
            prev: number | null;
        },
        results: EpisodesListItem[];
    }
};
