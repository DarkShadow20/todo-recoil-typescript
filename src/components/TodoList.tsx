import { useRecoilState } from "recoil";
import { todoListState } from "../state/atoms";
import { Todos } from "../state/types";


function TodoList(){

    const [todoList,setTodo] = useRecoilState(todoListState)
    
    const markTodoCompleted = (todoList:Todos[],todoId:number)=>{
        return todoList.map(todo=>{
            if(todo.id === todoId){
                return {...todo,isCompleted:true}
            }
            return todo
        })
    }

    const handleComplete = (todoId : number)=>{
            setTodo(markTodoCompleted(todoList, todoId));
          };   
    return(
        <div className="p-2">
            {todoList.map((todo)=>(
                <div key={todo.id}>
                    {!todo.isCompleted ?(
                    <>
                        <div className="text-lg	font-bold">
                            {todo.title}
                        </div>
                        <div>
                            Description: {todo.description}
                        </div>
                        <div className="border-2 border-black rounded">
                            <button className="p-2" onClick={()=>handleComplete(todo.id)}>Mark as completed</button>
                        </div>
                        <div className=" p-2 ">
                            <hr className="border-black"></hr>
                        </div>
                    </>) :""}
                </div>
            ))}
        </div>
    )

}


export default TodoList;