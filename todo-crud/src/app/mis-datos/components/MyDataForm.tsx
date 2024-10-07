"use client";
import { Button } from "@mui/base";
import { formData } from "../utils/formData";
import { FormField } from "./FormField";

export const MyDataForm = ({}) => {

    return (
        <div className="px-4 py-5 border border-1 rounded shadow-sm bg-white">
            <form className="flex flex-col w-full gap-10">
                <div className="flex flex-col gap-4 w-full">
                    {formData.map((item, i) => (
                        <FormField key={i} label={item.label} input={item.input} />
                    ))}                    
                </div>

                <Button className="w-full text-center font-semibold text-white bg-primary-main py-3 rounded">
                    Guardar
                </Button>
            </form>
        </div>
    );
};