import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AuthApiService } from '../../../api/services/auth-api.service';
import {
  ButtonFlatComponent,
  EButtonMode,
} from '../../../atoms/button-flat/button-flat.component';
import { InputComponent } from '../../../atoms/input/input.component';
import { passwordMatchingValidator } from './_validators/password-matching.validator';

@Component({
  selector: 'app-sign-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    FormsModule,
    InputComponent,
    ReactiveFormsModule,
    ButtonFlatComponent,
  ],
  providers: [AuthApiService],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  private readonly formBuilder = inject(FormBuilder);

  public readonly EButtonMode = EButtonMode;

  public formGroup = this.formBuilder.group({
    name: this.formBuilder.control('', {
      validators: [Validators.required],
    }),
    email: this.formBuilder.control('', {
      validators: [Validators.required, Validators.email],
    }),
    password: this.formBuilder.control('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
    confirmPassword: this.formBuilder.control('', {
      validators: [
        Validators.required,
        Validators.minLength(6),
        passwordMatchingValidator,
      ],
    }),
  });

  public onSubmit(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
  }
}
