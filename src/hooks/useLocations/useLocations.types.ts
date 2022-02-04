export type UseLocationsProps = {
    page?: number;
    filter?: string
}

export type LocationsListItem = {
    id: string;
    name: string;
    type: string;
    dimension: string;
};

export type GetLocationsQuery = {
    locations: {
        info: {
            count: number;
            pages: number;
            next: number | null;
            prev: number | null;
        },
        results: LocationsListItem[];
    }
};
