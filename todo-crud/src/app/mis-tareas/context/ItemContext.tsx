"use client";
import { createContext, useContext, useState, ReactNode } from 'react';
import { Item } from '@/app/types/Item';

interface ItemContextProps {
  items: Item[];
  addItem: (item: Item) => void;
}

const ItemContext = createContext<ItemContextProps | undefined>(undefined);

export const useItemContext = () => {
  const context = useContext(ItemContext);

  if (!context) {
    console.warn('useItemContext está siendo usado fuera del ItemProvider');
    return {
      items: [],
      addItem: () => {},
    };
  }
  return context;
};

// El proveedor que envuelve los componentes
export const ItemProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <ItemContext.Provider value={{ items, addItem }}>
      {children}
    </ItemContext.Provider>
  );
};