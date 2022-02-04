import {gql, useLazyQuery} from "@apollo/client";
import {GetEpisodesQuery, UseEpisodesProps} from "./useEpisodes.types";

const GET_EPISODES = gql`
query GetEpisodes($page: Int, $filter: String) {
  episodes(page: $page, filter: {name: $filter}) {
    info {
      count,
      pages,
      next,
      prev
    },
    results {
      id,
      name,
      episode,
      air_date,
    }
  }
}
`;

export const useEpisodes = (props: UseEpisodesProps = {}) => {
    const page = props?.page || 1;
    const filter = props?.filter || '';

    const [fetchEpisodes, {error, loading, data}] = useLazyQuery<GetEpisodesQuery>(GET_EPISODES, {
        variables: { page, filter }
    });

    return {fetchEpisodes, error, loading, data};
}
