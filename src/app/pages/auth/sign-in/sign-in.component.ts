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

@Component({
  selector: 'app-sign-in',
  imports: [
    ButtonModule,
    CardModule,
    FormsModule,
    InputTextModule,
    ButtonFlatComponent,
    ReactiveFormsModule,
    InputComponent,
  ],
  providers: [AuthApiService],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  private readonly formBuilder = inject(FormBuilder);

  public formGroup = this.formBuilder.group({
    email: this.formBuilder.control('', {
      validators: [Validators.required, Validators.email],
    }),
    password: this.formBuilder.control('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  public onSubmit(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    console.log(this.formGroup.value);
  }
}
