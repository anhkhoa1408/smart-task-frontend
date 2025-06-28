import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { AuthApiService } from '../../../api/services/auth-api.service';
import { ButtonFlatComponent } from '../../../atoms/button-flat/button-flat.component';
import { InputComponent } from '../../../atoms/input/input.component';
import { passwordMatchingValidator } from './_validators/password-matching.validator';

@Component({
  selector: 'app-sign-up',
  imports: [
    ButtonModule,
    CardModule,
    FormsModule,
    InputTextModule,
    InputComponent,
    ReactiveFormsModule,
    ButtonFlatComponent,
  ],
  providers: [AuthApiService],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  private readonly FormBuilder = inject(FormBuilder);

  public formGroup = this.FormBuilder.group(
    {
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    },
    {
      validators: passwordMatchingValidator,
    }
  );

  public onSubmit(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    console.log(this.formGroup.value);
  }
}
