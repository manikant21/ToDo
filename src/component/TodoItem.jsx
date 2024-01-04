import {useState} from 'react'
import { useToDo } from '../context';


// eslint-disable-next-line react/prop-types
function TodoItem({ todo }) {
    const [isTodoEditable,setIsTodoEditable]=useState(false);
    // eslint-disable-next-line react/prop-types
    const [todoMsg,setTodoMsg]=useState(todo.todo)
    const {updatedoto,deletetodo,comp}=useToDo();
    const editTodo=()=>{
        // eslint-disable-next-line react/prop-types
        updatedoto(todo.id,{...todo,todo:todoMsg})
        setIsTodoEditable(false);
    }
    const toggleCompleted=()=>{
        // eslint-disable-next-line react/prop-types
        comp(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                // eslint-disable-next-line react/prop-types
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                // eslint-disable-next-line react/prop-types
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                // eslint-disable-next-line react/prop-types
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    // eslint-disable-next-line react/prop-types
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                // eslint-disable-next-line react/prop-types
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                // eslint-disable-next-line react/prop-types
                onClick={() => deletetodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
