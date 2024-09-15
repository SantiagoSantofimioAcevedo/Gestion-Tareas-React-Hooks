
import { useTareasContext } from '../context/TareasContext'

export default function ListadoTareas() {

   const { tareas, removeTarea, filter }= useTareasContext()

   const tareasFiltradas = filter 
   ? tareas.filter(tarea => tarea.category.toUpperCase() === filter.toUpperCase())
   : tareas;


  return (
    <div>
        
        <h2 className='text-white font-bold mb-4'>Lista de tus Tareas</h2>
        {tareasFiltradas.map((tarea => (
            <div
            className='flex justify-between p-2 bg-gray-100 rounded mb-2'
            key={tarea.id}
            
            > 
            <span>{tarea.text}</span>
            <button 
            
            className='bg-red-500 text-white px-2 py-1 rounded'
           onClick={() => removeTarea(tarea.id)}
           > 
                Eliminar Tarea
            </button>
            </div>
        )))}
    </div>
  )
}

