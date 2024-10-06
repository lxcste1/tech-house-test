"use client";
import { usePathname } from 'next/navigation';

const MisTareas: React.FC = () => {
    const pathname = usePathname();

    return (
        <div className={`${pathname === '/mis-tareas' ? 'p-4' : ''}`}>
            {pathname === '/mis-tareas' && <h2 className="text-2xl font-semibold">Mis tareas</h2>}
            <p>Se renderizan Mis tareas.</p>
        </div>
    );
  };
  
  export default MisTareas;