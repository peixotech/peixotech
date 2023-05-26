import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { checkPasswords } from 'src/app/validators/check-password.validator';

@Component({
  selector: 'app-register-box',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-box.component.html',
  styleUrls: ['./register-box.component.scss']
})
export class RegisterBoxComponent {
  @Output() emitRegister = new EventEmitter<any>();

  form: FormGroup = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('')
  }, {
    validators: [checkPasswords()]
  });

  constructor() { }

  register() {
    this.emitRegister.emit(this.form.value);
  }
}
