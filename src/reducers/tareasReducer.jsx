export const InitialState = {
    tareas: [],
    filter: ''
}

export const tareasReducer = (state = InitialState, action) => {
    
    if(action.type === 'add_tarea'){
        return{
            ...state,
            tareas: [
                ...state.tareas,
                action.payload
            ]

        }
    }
    if (action.type === 'remove_tarea'){
        return {
            ...state,
            tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
        }
     }
     if (action.type === 'filter_by_category') {
        return {
            ...state,
            filter: action.payload
        }
     }
     return state
    }
    
