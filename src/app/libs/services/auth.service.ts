import { IAuthService } from "src/app/interfaces/auth.interface";

export class AuthService implements IAuthService {
    login(email: string, password: string): Promise<any> {

    }
}