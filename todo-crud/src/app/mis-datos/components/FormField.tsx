import { FormFieldProps } from "../types/formField";

export const FormField = ({
    label,
    input
}: FormFieldProps) => {

    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={label.for} className="text-sm text-neutral-60">{label.text} <span className="text-red-600">*</span></label>
            <input placeholder={input.placeholder} name={input.name} id={input.id} autoComplete={input.autocomplete} className="text-sm border border-1 rounded-sm py-2 px-4" />
        </div>        
    );
};