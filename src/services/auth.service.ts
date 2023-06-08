import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Injectable } from "@angular/core";
import { firstValueFrom, map } from "rxjs";
import { AuthModel } from "src/entities/auth.model";
import { User } from "src/entities/user.model";
import { IAuthService } from 'src/controllers/auth.interface';
import { AuthError, FIREBASE_AUTH_CODES } from 'src/data/interfaces/auth-error.strategy';
@Injectable({
    providedIn: 'root',
})
export class AuthService implements IAuthService {
    userData!: User | null;

    constructor(
        public afAuth: AngularFireAuth,
        public afs: AngularFirestore,
    ) {
        this.afAuth.authState.subscribe(async (_user) => {
            if (_user) {
                const userRef = this.afs.doc<User>(`users/${_user.uid}`).get();
                const userSnap = await firstValueFrom(userRef);
                const user = userSnap.data() as User;
                this.userData = user as User;
                localStorage.setItem('user', JSON.stringify(this.userData));
                console.log('Login!', Date.now());
                JSON.parse(localStorage.getItem('user')!);
            } else {
                this.userData = null
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user')!);
            }
        });
    }

    login(formData: AuthModel): Promise<any> {
        return this.afAuth
            .signInWithEmailAndPassword(formData.email, formData.password).catch((err) => err)
    }

    register(formData: AuthModel): Promise<any> {
        return this.afAuth.createUserWithEmailAndPassword(formData.email, formData.password)
            .then(async (result) => {
                if (result.user) {
                    const user = {
                        uid: result.user.uid,
                        email: result.user.email,
                        displayName: formData.fullName ? formData.fullName : '',
                        photoURL: '',
                        emailVerified: result.user.emailVerified,
                    } as User;
                    await this.setUserData(user);
                    return true;
                } else {
                    throw new Error('Erro ao criar usuário');
                }
            })
            .catch((error) => {
                console.error(error);
                return error
            });
    }

    setUserData(user: User) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(
            `users/${user.uid}`
        );

        const userData: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
        };

        return userRef.set(userData, {
            merge: true,
        });
    }

    formatAuthCodes(code: string): string {
        const error: AuthError = new FIREBASE_AUTH_CODES[code.split('/')[1]]();
        return error.msg();
    }

    async logout() {
        await this.afAuth.signOut();
        localStorage.removeItem('user');
        this.userData = null;
    }

    async isLoggedIn(): Promise<boolean> {
        return await firstValueFrom(
            this.afAuth.authState.pipe(map(async (_user) => {
                if (_user) {
                    const userRef = this.afs.doc<User>(`users/${_user.uid}`).get();
                    const userSnap = await firstValueFrom(userRef);
                    const user = userSnap.data() as User;
                    this.userData = user as User;
                    localStorage.setItem('user', JSON.stringify(this.userData));
                    console.log('Login!', Date.now());
                    return true;
                } else {
                    localStorage.setItem('user', 'null');
                    JSON.parse(localStorage.getItem('user')!)
                    return false;
                }
            }))
        )
    }
}