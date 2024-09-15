import React, { useState } from 'react'
import { useTareasContext } from '../context/TareasContext'

export default function FormularioTareas() {

    const [ text, setText] = useState ('')
    const [ category, setCategory ] = useState ('')

   const{addTarea} = useTareasContext()

   const handleAddTarea =() =>{
        if (text && category) {
            addTarea({
                id : Date.now(),
                text,
                category
            })
            setText('')
            setCategory('')
        }
   }
  return (
    <div className='mb-4' >
        <h2 className='text-white font-bold mb-2'> Añadir Tarea</h2>

        <input 
        type="text" 
        className='border p-2 roundend mb-2 w-full'
        placeholder='Describe tu tarea'
        value={text}
        onChange={(e) => setText(e.target.value)}
        
        />
        

        <h2 className='text-white font-bold mb-2' > Añadir Categoria</h2>

        <input 
        type="text" 
        className='border p-2 rounded mb-2 w-full'
        placeholder='Asignala a una categoria'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        
        />

        <button
        className='bg-green-400  px-5 py-3 rounded'
        onClick={handleAddTarea}
        >
            Añadir Nueva Tarea
        </button>
    </div>
  )
}


