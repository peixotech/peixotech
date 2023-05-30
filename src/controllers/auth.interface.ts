import { AuthModel } from "src/entities/auth.model";
import { User } from "src/entities/user.model";

export abstract class IAuthService {
    constructor(
        public userData: User | null
    ) { }

    login(formData: AuthModel): Promise<any> {
        throw new Error("Method not implemented.");
    };

    register(formData: AuthModel): Promise<any> {
        throw new Error("Method not implemented.")
    };

    setUserData(user: User): Promise<void> {
        throw new Error("Method not implemented.")
    }

    formatAuthCodes(code: string): string {
        throw new Error("Method not implemented.")
    }

    logout(): Promise<void> {
        throw new Error("Method not implemented.")
    }

    isLoggedIn(): Promise<boolean> {
        throw new Error("Method not implemented.")
    }

}