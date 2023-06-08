import { Injectable } from "@angular/core";
import { Firestore, collection, query, where, CollectionReference, getDocs, collectionData } from "@angular/fire/firestore";
import { BehaviorSubject, Observable, of, throwError } from "rxjs";
import { IAuthService } from "src/controllers/auth.interface";
import { IChamadoService } from 'src/controllers/chamado.interface';
import { Chamado } from "src/entities/chamado.model";
@Injectable({
    providedIn: 'root',
})
export class ChamadoService implements IChamadoService {
    private _chamados!: BehaviorSubject<Chamado[]>

    constructor(
        private auth: IAuthService,
        private afs: Firestore,
    ) { }

    get chamados() {
        return this._chamados.asObservable()
    }

    getChamadosCliente(): Observable<Chamado[]> {
        const user = this.auth.userData

        if (!user) return of([])

        return collectionData<Chamado>(
            query<Chamado>(
                collection(this.afs, 'chamados') as CollectionReference<any>,
                where('userCliente.uid', '==', user.uid)
            ), { idField: 'id' }
        );
    }

    getChamadosSuporte(): Observable<Chamado[]> {
        const user = this.auth.userData

        if (!user) return of([])

        return collectionData<Chamado>(
            query<Chamado>(
                collection(this.afs, 'chamados') as CollectionReference<any>,
                where('userSuporte.uid', '==', user.uid)
            ), { idField: 'id' }
        );
    }

    nextChamado(): Promise<void> {
        throw ("Function not implemented")
    }
}