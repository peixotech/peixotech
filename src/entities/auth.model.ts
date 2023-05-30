export class AuthModel {
    constructor(
        public email: string,
        public password: string,
        public fullName?: string,
        public confirmPassword?: string,
    ) { }
}