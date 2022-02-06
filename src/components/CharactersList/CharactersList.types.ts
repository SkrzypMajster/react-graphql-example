export type CharactersListType = any[];

export type CharactersListProps = {
    characters: CharactersListType;
    page: number;
    pagesCount: number;
    onChangePage: (newPage: number) => void;
}
