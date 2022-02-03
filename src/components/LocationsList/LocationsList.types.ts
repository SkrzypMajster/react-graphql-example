import {LocationsListItem} from "../../hooks/useLocations/useLocations.types";

export type LocationsListProps = {
    page: number;
    count: number;
    locations: LocationsListItem[];
    onChangePage: (page: number) => void;
};
