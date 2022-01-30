export type CharactersListProps = {
    characters: any[];
    page: number;
    pagesCount: number;
    onChangePage: (newPage: number) => void;
}
