import { Observable } from "rxjs";
import { Chamado } from "src/entities/chamado.model";

export abstract class IChamadoService {
    constructor() { }

    get chamados(): Observable<Chamado[]> {
        throw ("Function not implemented")
    }

    getChamadosCliente(): Observable<Chamado[]> {
        throw ("Function not implemented")
    }

    getChamadosSuporte(): Observable<Chamado[]> {
        throw ("Function not implemented")
    }

    nextChamado(): Promise<void> {
        throw ("Function not implemented")
    }
}