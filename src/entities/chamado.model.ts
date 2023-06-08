import { User } from "firebase/auth";

export class Chamado {
    constructor(
        public id: string,
        public description: string,
        public category: { id: string, description: string },
        public userCliente: User | null,
        public userSuporte: User | null,
        public status: { id: string, name: string },
        public dateCreated: number,
        public dateStarted: number | null,
        public dateFinished: number | null,
    ) { }
}