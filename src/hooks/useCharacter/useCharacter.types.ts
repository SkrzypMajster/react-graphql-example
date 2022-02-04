export type UseCharacterProps = {
    id: number;
}

export type Character = {
    image: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: { id: string; name: string };
    location: { id: string; name: string };
    episode: { id: string; name: string }[];
};

export type GetCharacterQuery = {
    character: Character,
};
