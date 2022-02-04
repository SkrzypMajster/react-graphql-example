import {gql, useQuery} from "@apollo/client";
import {GetEpisodeQuery, UseEpisodeProps} from "./useEpisode.types";

const GET_EPISODE = gql`
  query GetEpisode($id: ID!) {
    episode(id: $id) {
      name,
      episode,
      air_date,
      characters {
        id,
        name,
        image
      }
    }
  }
`;

export const useEpisode = ({id}: UseEpisodeProps) => {
    const {error, loading, data} = useQuery<GetEpisodeQuery>(GET_EPISODE, {
        variables: {id}
    });

    return {error, loading, data};
}
