import { useState } from "react"
import { useSetRecoilState } from "recoil"
import { todoListState } from "../state/atoms"

let id = 0;

function getId() {
  return id++;
}

function CreateTodo (){
    const [inputTitle, setInputValuTitle] = useState<string>("")
    const [description,setDescription] = useState<string>("")

    const setTodo = useSetRecoilState(todoListState);

    const handleClick = () => {
        setTodo((prev) => [ ...prev,
            {
                id : getId(),
                title : inputTitle,
                description : description,
                isCompleted : false
        }]);
        
        setDescription("")
        setInputValuTitle("")
    }

    return (
        <>
            <div className="p-2">
                <input 
                    type="text" 
                    value={inputTitle}
                    onChange={(e) => setInputValuTitle(e.target.value)} 
                    className="border-2 border-black rounded" 
                    placeholder="title" 
                />
            </div>
            <div className="p-2">
                <input 
                    type="text" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                    className="border-2 border-black rounded" 
                    placeholder="description" 
                />
            </div>
            <div className="p-2">
                <button onClick={handleClick} className="border-2 border-black p-2 rounded">Add Todo</button>
            </div>
        </>
    )
}

export default CreateTodo