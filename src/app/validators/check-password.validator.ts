import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function checkPasswords(): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
        const pass = form.get('password')?.value;
        const confirmPass = form.get('confirmPassword')?.value

        if (form.get('confirmPassword')?.pristine) {
            return null;
        }

        return pass === confirmPass ? null : { notSame: true }
    }
}