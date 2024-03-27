import { useRecoilValue } from "recoil";
import { todoListState } from "../state/atoms";



function CompletedList(){
    const todoList = useRecoilValue(todoListState)
    return(
        <>
            {todoList.map((item)=>(
                <div key={item.id}>
                    {item.isCompleted ? (<div className="p-2">
                        <div className="text-lg	font-bold">
                            {item.title}
                        </div>
                        <div>
                            Description : {item.description}
                        </div>
                        <div className="p-2">
                            <hr className="border-black"></hr>
                        </div>
                    </div>):("")}
                </div>
            ))} 
        </>)
}


export default CompletedList;




