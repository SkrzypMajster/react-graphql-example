import {gql, useQuery} from "@apollo/client";
import {GetCharacterQuery, UseCharacterProps} from "./useCharacter.types";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      image,
      name,
      status,
      species,
      gender,
      origin {
        id,
        name,
      },
      location {
        id,
        name
      },
      episode {
        id,
        name
      }
    }
  }
`;

export const useCharacter = ({id}: UseCharacterProps) => {
    const {error, loading, data} = useQuery<GetCharacterQuery>(GET_CHARACTER, {
        variables: {id}
    });

    return {error, loading, data};
}
