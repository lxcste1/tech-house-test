import React, { useState } from "react";
import { Item } from "@/app/types/Item";
import Image from "next/image";

import { Button } from "@mui/base";
import { Dialog, DialogContent, DialogTitle, DialogActions } from "@mui/material";

import Close from '@/app/public/assets/icons/Close.svg';

interface AddTaskProps {
    onAddTask: (newItem: Item) => void; // Nueva prop para pasar el nuevo ítem a MyTodos
  }

export const AddTask = ({onAddTask}: AddTaskProps) => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [nextId, setNextId] = useState<number | null>(null);
  
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
  
      if (nextId !== null) {
        const newItem: Item = {
          id: nextId, // ID autogenerado
          title,
          description,
        };
  
        try {
          onAddTask(newItem); // Llamamos la función para agregar el nuevo ítem al estado en MyTodos
          setNextId(prevId => (prevId !== null ? prevId + 1 : 1)); // Incrementar el ID
          setTitle(''); // Limpiar formulario
          setDescription('');
          setOpen(false); // Cerrar el modal
        } catch (error) {
          console.error("Error al crear el ítem", error);
        }
      }
    };
  
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button onClick={handleClickOpen} className="w-full text-center font-semibold text-white bg-primary-main py-3 rounded">
                Añadir tarea
            </Button>
            <Dialog 
                open={open}
                onClose={handleClose}
                fullWidth={true}
                maxWidth={"sm"}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        handleSubmit(event);
                        handleClose();
                    }
                }}            
            >
                <div className="flex justify-between items-center px-6 pt-4">
                    <DialogTitle className="p-0">Añadir tarea</DialogTitle>
                    <Button className="w-[24px] h-[24px]" onClick={handleClose}>
                        <Image src={Close} alt="Cerrar" width={24} height={24} />
                    </Button>
                </div>
                
                <DialogContent className="flex flex-wrap gap-5 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor='title' className="text-sm text-neutral-60">Nombre</label>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="Nombre" 
                            onChange={e => setTitle(e.target.value)}
                            className="text-sm border border-1 rounded-sm py-2 px-4" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor='description' className="text-sm text-neutral-60">Descripción</label>
                        <textarea 
                            name="description" 
                            placeholder="Descripción" 
                            onChange={e => setDescription(e.target.value)} 
                            rows={6} 
                            className="text-sm border border-1 rounded-sm py-2 px-4" />
                    </div>
                </DialogContent>
                <DialogActions className="flex gap-4 justify-between px-6">
                    <Button onClick={handleClose} className="text-sm text-center font-semibold text-neutral-20 w-1/2 rounded py-1.5">Cancelar</Button>
                    <Button type="submit" className="text-sm text-center font-semibold text-white bg-primary-main w-1/2  rounded py-1.5">Guardar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};