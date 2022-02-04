export type UseEpisodeProps = {
    id: number;
}

export type Episode = {
    name: string;
    episode: string;
    air_date: string;
    characters: { id: string; name: string, image: string }[];
};

export type GetEpisodeQuery = {
    episode: Episode,
};
