import { atom} from "recoil";

interface Todos {
    id: number;
    text:string;
    description:string;
    isCompleted:boolean;
}

export const todoListState= atom({
    key: 'todoAtomFamily',
    default: [] as Todos[]
})

