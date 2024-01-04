
import {createContext,useContext} from 'react';

export const ToDoContext=createContext({
    todos:[
        {
            id:5,
            todo:"hello world",
            completed:false,
        }
    ],

    addtodo: (todo)=>{},
    updatetodo: (id,todo)=>{},
    deletetodo: (id)=>{},
    comp: (id)=>{}
})

export const ToDoContextProvider=ToDoContext.Provider

export const useToDo=()=>{
    return useContext(ToDoContext)
}
