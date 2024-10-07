import { Skeleton } from "@mui/material";

interface SkeletonCardProps {
    rows: number;
}

export const SkeletonCard = ({rows}: SkeletonCardProps) => {
    return (
        <>
            {Array.from({ length: rows }).map((_, index) => (
                <div key={index} className="flex justify-between items-center gap-2 border border-1 rounded shadow-sm px-4 py-5 my-4 max-h-[94px]">
                    <div className="flex flex-col">
                        <Skeleton width={140} height={25} />
                        <Skeleton width={293} height={32} />
                    </div>
                    <div className="flex items-center">
                        <Skeleton width={20} variant="text" sx={{ fontSize: '1.5rem' }} />
                    </div>
                </div>            
            ))}
        </>
    );
};