import {gql, useQuery} from "@apollo/client";
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
    const filter = props?.fitler || '';

    const {error, loading, data} = useQuery<GetEpisodesQuery>(GET_EPISODES, {
        variables: { page, filter }
    });

    return {error, loading, data};
}
