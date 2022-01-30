import {gql, useQuery} from "@apollo/client";
import {GetCharactersQuery, UseCharactersProps} from "./useCharacters.types";

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $filter: String) {
      characters(page: $page, filter: {name: $filter}) {
        info {
          count,
          pages,
          next,
          prev
        }
        results {
          name,
          image
        }
      }
  }
`;

export const useCharacters = (props: UseCharactersProps = {}) => {
    const page = props?.page || 1;
    const filter = props?.fitler || '';

    const {error, loading, data} = useQuery<GetCharactersQuery>(GET_CHARACTERS, {
        variables: { page, filter }
    });

    return {error, loading, data};
}
