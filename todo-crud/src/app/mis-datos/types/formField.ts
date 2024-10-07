export interface FormFieldProps {
    label: LabelType;
    input: InputType;
}

export type LabelType = {
    text: string;
    for: string;
}

export type InputType = {
    placeholder: string;
    name: string;
    id: string;
    autocomplete: string;
}