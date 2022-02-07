export type LocationsListProps = {
    page: number;
    count: number;
    locations: any[];
    onChangePage: (page: number) => void;
};
