import {gql, useQuery} from "@apollo/client";
import {GetLocationQuery, UseLocationProps} from "./useLocation.types";

const GET_LOCATION = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      name,
      type,
      dimension,
      residents {
        id,
        image,
        name,
      }
    }
  }
`;

export const useLocation = ({id}: UseLocationProps) => {
    const {error, loading, data} = useQuery<GetLocationQuery>(GET_LOCATION, {
        variables: {id}
    });

    return {error, loading, data};
}
