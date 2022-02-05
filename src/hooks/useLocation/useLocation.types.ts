export type UseLocationProps = {
    id: number;
}

export type Location = {
    name: string;
    type: string;
    dimension: string;
    residents: { id: string; image: string; name: string }[];
};

export type GetLocationQuery = {
    location: Location,
};
