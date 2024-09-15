import React from 'react'
import { useTareasContext } from '../context/TareasContext'

export default function FiltroTareas() {

    const {tareas, filter,filteredByCategory} =useTareasContext()
    
    const categorys = Array.from(new Set ( tareas.map(tarea => tarea.category.toUpperCase()) ) )

    const handleFilterChange = ( e ) =>{
        console.log('Recibiendo la categoria :', e.target.value)
        filteredByCategory(e.target.value)
    }

  return (
    <div className='mb-5'>
        <h2 className='text-white font-bold mb-2'> Filtrar por tus categorias favoritas</h2>
        <select 
        className='border p-2 rounded mb-2 w-full' 
        onChange={handleFilterChange}
        value={filter}
        

        >
            <option>--- Categorias Favoritas --- </option>
            {categorys.map((category, index)=> (
                 <option
                 key={index}
                 value={category}
                 >
                 
                 {category}
                </option>
            ))}
           
        </select>
    </div>
  )
}

