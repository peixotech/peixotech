export interface AuthError {
    msg(): string;
}

export class AuthErrorEmailAlreadyInUse implements AuthError {
    msg(): string {
        return 'E-mail já cadastrado';
    }
}

export class AuthErrorInvalidEmail implements AuthError {
    msg(): string {
        return 'E-mail inválido';
    }
}

export class AuthErrorInvalidPassword implements AuthError {
    msg(): string {
        return 'Senha inválida';
    }
}

export class AuthErrorUserNotFound implements AuthError {
    msg(): string {
        return 'Usuário não encontrado';
    }
}

export class AuthErrorWrongPassword implements AuthError {
    msg(): string {
        return 'Senha incorreta';
    }
}

export const FIREBASE_AUTH_CODES: any = {
    'email-already-exists': AuthErrorEmailAlreadyInUse,
    'invalid-email': AuthErrorInvalidEmail,
    'invalid-password': AuthErrorInvalidPassword,
    'user-not-found': AuthErrorUserNotFound,
    'wrong-password': AuthErrorWrongPassword,
    'email-already-in-use': AuthErrorEmailAlreadyInUse,
}