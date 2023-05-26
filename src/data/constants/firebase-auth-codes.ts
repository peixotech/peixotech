import { MessagesIndex } from "../interfaces/message-index";

export const FIREBASE_AUTH_CODES: MessagesIndex = {
    'email-already-exists': 'O endereço de e-mail já está em uso.',
    'invalid-email': 'O endereço de e-mail está mal formatado.',
    'invalid-password': 'A senha deve ter pelo menos 6 caracteres.',
    'user-not-found': 'Não há registro de usuário correspondente a este identificador',
    'wrong-password': 'A senha é inválida ou o usuário não possui uma senha.',
    'user-disabled': 'A conta do usuário foi desativada por um administrador.',
    'operation-not-allowed': 'O tipo de conta correspondente a este usuário não está ativado.',
    'weak-password': 'A senha deve ter pelo menos 6 caracteres.',
    'internal-error': 'Ocorreu um erro interno.',
    'invalid-argument': 'O endereço de e-mail está mal formatado.',
    'invalid-verification-code': 'O código de verificação da credencial de autenticação é inválido.',
    'invalid-verification-id': 'O ID de verificação da credencial de autenticação é inválido.',
    'missing-verification-code': 'Um código de verificação deve ser fornecido.',
    'missing-verification-id': 'Um ID de verificação deve ser fornecido.',
    'quota-exceeded': 'A cota de SMS diária foi excedida.',
    'captcha-check-failed': 'O token de resposta do reCAPTCHA não é válido, expirou ou o domínio não é permitido.',
    'email-already-in-use': 'O endereço de e-mail já está em uso por outra conta.',
}
