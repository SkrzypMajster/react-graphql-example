export type UseCharacterProps = {
    id: number;
}

export type Character = {
    name: string;
    image: string;
};

export type GetCharacterQuery = {
    character: Character,
};
