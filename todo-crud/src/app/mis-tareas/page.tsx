"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
/* import { ItemProvider, useItemContext } from './context/ItemContext'; */ // TODO: Resolver Context

import { getItems, deleteItem } from '../api/services';
import { Item } from '../types/Item';
import { TaskCard } from './components/TaskCard';
import { Button } from '@mui/base';
import Trash from '@/app/public/assets/icons/Trash.svg';
import { SkeletonCard } from './components/SkeletonCard';
import { AddTask } from './components/AddTask';

const MyTodos: React.FC = () => {
    /* const { items } = useItemContext(); */ // TODO: Resolver Context
    const pathname = usePathname();
    const [todos, setTodos] = useState<Item[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const items = await getItems();
                setTodos(items.slice(0, 3));
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

    const handleAddTask = (newItem: Item) => {
        setTodos(prevTodos => [...prevTodos, newItem]);
    };

    return (
        <div className={`${pathname === '/mis-tareas' ? 'p-4 max-w-lg m-auto' : ''}`}>
            {pathname === '/mis-tareas' && <h2 className="text-xl font-bold text-neutral-60">Mis tareas</h2>}
            {loading ? (
                <SkeletonCard rows={3} />
            ) : (
                <>
                    {todos.map((item: Item) => (
                        <TaskCard key={item.id} {...item}>
                            <Button onClick={() => handleDelete(item.id)} className='w-[18px]'>
                                <Image src={Trash} alt={'Eliminar todo'} width={18} height={18} />
                            </Button>
                        </TaskCard>
                    ))}
                    {/* {items && items.map((item: Item) => ( TODO: Resolver Context
                        <TaskCard key={item.id} {...item}>
                            <Button onClick={() => handleDelete(item.id)} className='w-[18px]'>
                                <Image src={Trash} alt={'Eliminar todo'} width={18} height={18} />
                            </Button>
                        </TaskCard>                    
                    ))}             */}
                </>
            )}
            <AddTask onAddTask={handleAddTask} />
        </div>
    );
};

export default MyTodos;