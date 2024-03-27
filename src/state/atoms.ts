import { atom} from "recoil";
import { Todos } from "./types";



export const todoListState= atom({
    key: 'todoAtomFamily',
    default: [] as Todos[]
})

