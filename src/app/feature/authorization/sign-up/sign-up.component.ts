import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import {
  ConfirmValidParentMatcher,
  CustomValidators,
  errorMessages,
  regExps,
} from '../validators';

@Component({
  selector: 'isma-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signUpForm!: FormGroup;

  confirmValidParentMatcher: ErrorStateMatcher =
    new ConfirmValidParentMatcher();
  errors = errorMessages;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  get email() {
    return this.signUpForm.get(`email`);
  }
  get phone() {
    return this.signUpForm.get(`phone`);
  }
  get password() {
    return this.signUpForm.get(`password`);
  }
  get confirmPassword() {
    return this.signUpForm.get(`confirmPassword`);
  }

  buildForm() {
    this.signUpForm = this.fb.group({
      email: [``, [Validators.required, Validators.email]],
      phone: [``, Validators.required],
      matchingPasswords: this.fb.group(
        {
          password: [
            ``,
            [Validators.required, Validators.pattern(regExps['password'])],
          ],
          confirmPassword: [``, Validators.required],
        },
        { validators: CustomValidators.childrenMatch }
      ),
    });
  }

  handleSubmit() {}
}
