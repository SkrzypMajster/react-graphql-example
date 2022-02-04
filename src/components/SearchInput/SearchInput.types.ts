import {ChangeEvent} from "react";

export type SearchInputProps = {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
