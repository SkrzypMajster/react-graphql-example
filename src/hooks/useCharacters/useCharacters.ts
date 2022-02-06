import {gql, useLazyQuery} from "@apollo/client";
import {GetCharactersQuery, UseCharactersProps} from "./useCharacters.types";

const GET_CHARACTERS = gql`
  
`;

export const useCharacters = (props: UseCharactersProps = {}) => {
    const page = props?.page || 1;
    const filter = props?.filter || '';

    const [fetchCharacters, {error, loading, data}] = useLazyQuery<GetCharactersQuery>(GET_CHARACTERS, {
        variables: { page, filter }
    });

    return {fetchCharacters, error, loading, data};
}
