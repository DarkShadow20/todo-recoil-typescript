import { useRecoilValue } from "recoil";
import { todoListState } from "../state/atoms";


function TodoList(){

    const todoList = useRecoilValue(todoListState)
    console.log(todoList)
    return(
        <div>
            {/* {todoList.map((todo,id)=>(
                <div key={id}>
                {todo.title}
                </div>
            ))} */}
        </div>
    )

}


export default TodoList;