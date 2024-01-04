/* eslint-disable no-unused-vars */
import {createContext,useContext} from 'react';

export const ToDoContext=createContext({
    todos:[
        {
            id:5,
            todo:"hello world",
            completed:false,
        }
    ],
    // eslint-disable-next-line no-unused-vars
    addtodo: (todo)=>{},
    updatetodo: (id,todo)=>{},
    deletetodo: (id)=>{},
    comp: (id)=>{}
})

export const ToDoContextProvider=ToDoContext.provider()

export const useToDo=()=>{
    return useContext(ToDoContext)
}
