import { useRecoilState } from "recoil"
import { todoListState } from "../state/atoms"

function Todo (){
    const setTodo = useRecoilState(todoListState)
    return (
        <>
        <div className="p-2">
            <input type="text" className="border-2 border-black rounded" placeholder="title"></input>   
         </div>
         <div className="p-2">
            <input type="text" className="border-2 border-black rounded" placeholder="description"></input>
         </div>
         <div className="p-2">
            <button className="border-2 border-black p-2 rounded">Add Todo</button>
         </div>
        </>
    )
}


export default Todo