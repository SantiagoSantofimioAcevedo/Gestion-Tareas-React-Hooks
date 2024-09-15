import { useReducer } from "react"
import { InitialState, tareasReducer } from "../reducers/tareasReducer"


const useTareas = () => {

    const [state, dispatch]= useReducer(tareasReducer, InitialState)
    
    

    const addTarea = (tarea) => {
        dispatch({ type:'add_tarea', payload: tarea})
    }

    const removeTarea = (tareaId ) => {
        dispatch({type : 'remove_tarea',payload:tareaId})
    }

    const filteredByCategory = (category) =>{
        dispatch({
            type:'filter_by_category',
            payload: category
        })
    }
    
    return {
        tareas :state.tareas,
        filter: state.filter,
        addTarea,
        removeTarea,
        filteredByCategory
    }
}

export default useTareas