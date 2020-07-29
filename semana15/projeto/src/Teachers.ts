import {Users} from "./Users"

enum TEACHER_SPECIALITY {
    REACT= "REACT",
    REDUX = "REDUX",
    CSS= "CSS",
    TESTES= "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    POO = "POO",
    BACKEND = "BACKEND"
}
 
export class Teachers implements Users {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public birthDate: string,
        public specialties: TEACHER_SPECIALITY[]
    ){}
}