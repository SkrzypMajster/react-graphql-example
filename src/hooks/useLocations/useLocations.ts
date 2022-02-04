import {gql, useLazyQuery} from "@apollo/client";
import {GetLocationsQuery, UseLocationsProps} from "./useLocations.types";

const GET_LOCATIONS = gql`
query GetLocations($page: Int, $filter: String) {
  locations(page: $page, filter: {name: $filter}) {
    info {
      count,
      pages,
      next,
      prev
    },
    results {
      id,
      name,
      type,
      dimension,
    }
  }
}
`;

export const useLocations = (props: UseLocationsProps = {}) => {
    const page = props?.page || 1;
    const filter = props?.filter || '';

    const [fetchLocations, {error, loading, data}] = useLazyQuery<GetLocationsQuery>(GET_LOCATIONS, {
        variables: { page, filter }
    });

    return {fetchLocations, error, loading, data};
}
