import { Item } from "@/app/types/Item";
import { ReactElement } from "react";

export const TaskCard = ({
    title,
    children
}: Item & {children: ReactElement}) => {
    return (
        <div className="flex justify-between gap-2 border border-1 rounded shadow-sm px-4 py-5 my-4">
            <div className="flex flex-col max-w-80">
                <p className="text-base font-semibold text-neutral-80 leading-5">{title}</p>
                <span className="text-xs text-neutral-40 leading-4 text-ellipsis overflow-hidden max-w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, ac elementum ultrices mauris. Cursus urna</span>
            </div>
            <div className="flex">
                {children}
            </div>
        </div>
    );
};