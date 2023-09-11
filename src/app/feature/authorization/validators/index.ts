import { ValidatorFn, AbstractControl, FormGroup, FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

/**
 * Custom validator functions for reactive form validation
 */
export class CustomValidators {
    /**
     * Validates that child controls in the form group are equal
     */
    static childrenMatch: ValidatorFn = (formGroup: AbstractControl) => {
        const passwordCtrl = formGroup.get(`password`)
        const confirmPasswordCtrl = formGroup.get(`confirmPassword`)
        const isValid = passwordCtrl?.value === confirmPasswordCtrl?.value

        confirmPasswordCtrl?.setErrors({notSame: true})

        return isValid ? null : ({notSame: true});
    }
}

/**
 * Custom ErrorStateMatcher which returns true (error exists) when the parent form group is invalid and the control has been touched
 */
export class ConfirmValidParentMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return (control && control?.parent || false) && control?.parent?.invalid && control?.touched;
    }
}

/**
 * Collection of reusable RegExps
 */
export const regExps: { [key: string]: RegExp } = {
    password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
};

/**
 * Collection of reusable error messages
 */
export const errorMessages: { [key: string]: string } = {
    phone: 'Phone number must be between 1 and 128 characters',
    email: 'Email must be a valid email address (username@domain)',
    password: 'Password must be between 7 and 15 characters, and contain at least one number and special character',
    confirmPassword: 'Passwords must match'
};