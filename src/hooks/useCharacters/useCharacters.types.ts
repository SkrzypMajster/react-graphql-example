export type UseCharactersProps = {
    page?: number;
    fitler?: string
}

export type CharactersListItem = {
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
    }
};
