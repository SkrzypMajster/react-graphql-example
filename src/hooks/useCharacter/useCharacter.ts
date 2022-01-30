import {gql, useQuery} from "@apollo/client";
import {GetCharacterQuery, UseCharacterProps} from "./useCharacter.types";

const GET_CHARACTER = gql`
    query GetCharacter($id: ID!){
      character(id: $id) {
        id,
        name,
        image,
        status,
        species
      }
    }
`;

export const useCharacter = ({ id }: UseCharacterProps) => {
    const {error, loading, data} = useQuery<GetCharacterQuery>(GET_CHARACTER, {
        variables: { id }
    });

    return {error, loading, data};
}
