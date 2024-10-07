"use client";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getItems, deleteItem } from '../api/services';
import { Item } from '../types/Item';
import { TaskCard } from './components/TaskCard';

import { Button } from '@mui/base';

import Trash from '@/app/public/assets/icons/Trash.svg';
import Image from 'next/image';
import { SkeletonCard } from './components/SkeletonCard';
import { AddTask } from './components/AddTask'; // Asegúrate de que AddTask reciba una prop para actualizar las tareas

const MyTodos: React.FC = () => {
    const pathname = usePathname();
    const [todos, setTodos] = useState<Item[]>([]); // Estado que manejará los items existentes y nuevos
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const items = await getItems();
                setTodos(items.slice(0, 3)); // Limitar a los primeros 3 ítems de la API
            } catch (error) {
                console.error('Error fetching items:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTodos();
    }, []);

    const handleDelete = async (id: number) => {
        await deleteItem(String(id));
        setTodos(todos.filter(item => item.id !== id));
    };

    // Esta función se pasa al componente AddTask para actualizar la lista de tareas
    const handleAddTask = (newItem: Item) => {
        setTodos(prevTodos => [...prevTodos, newItem]); // Agregar el nuevo ítem al array de todos
    };

    return (
        <div className={`${pathname === '/mis-tareas' ? 'p-4 max-w-lg m-auto' : ''}`}>
            {pathname === '/mis-tareas' && <h2 className="text-xl font-bold text-neutral-60">Mis tareas</h2>}
            {loading ? (
                <SkeletonCard rows={3} />
            ) : (
                todos.map((item: Item) => (
                    <TaskCard key={item.id} {...item}>
                        <Button onClick={() => handleDelete(item.id)} className='w-[18px]'>
                            <Image src={Trash} alt={'Eliminar todo'} width={18} height={18} />
                        </Button>
                    </TaskCard>
                ))
            )}
            <AddTask onAddTask={handleAddTask} /> {/* Pasamos la función handleAddTask */}
        </div>
    );
};

export default MyTodos;