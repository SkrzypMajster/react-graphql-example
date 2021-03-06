export type UseCharactersProps = {
    page?: number;
    filter?: string
}

export type CharactersListItem = {
    id: string;
    name: string;
    image: string;
};

export type GetCharactersQuery = {
    characters: {
        info: {
            count: number;
            pages: number;
            next: number | null;
            prev: number | null;
        },
        results: CharactersListItem[];
    } | null;
};
