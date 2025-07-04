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
import { MessageService } from 'primeng/api';
import { AppRoutingConstant } from '../../../core/constants/app-routing.constants';

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
  template: `
    <form
      [formGroup]="formGroup"
      (ngSubmit)="onSubmit()"
      class="flex flex-col min-w-[400px] gap-6 px-6 py-10 bg-white shadow-lg rounded-xl"
    >
      <h1 class="text-center text-2xl font-semibold">Register new account</h1>
      <app-input [label]="'Name'" [required]="true" formControlName="name" />
      <app-input [label]="'Email'" [required]="true" formControlName="email" />
      <app-input
        [label]="'Password'"
        [required]="true"
        type="password"
        formControlName="password"
      />
      <app-input
        [label]="'Confirm password'"
        [required]="true"
        formControlName="confirmPassword"
        type="password"
      />
      <div class="p-fluid">
        <app-button-flat label="Submit" [mode]="EButtonMode.FULL" />
      </div>
    </form>
  `,
})
export class SignUpComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly authApiService = inject(AuthApiService);
  private readonly messageService = inject(MessageService);

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

    const { name, email, password } = this.formGroup.value;
    this.authApiService
      .signUp({
        name: name!,
        email: email!,
        password: password!,
      })
      .subscribe({
        next: () => {
          // this.router.navigateByUrl(AppRoutingConstant.SIGN_IN);
        },
        error: (error: Error) => {
          console.error('Sign-in failed:', error);
          this.messageService.add({
            severity: 'info',
            summary: 'Info',
            detail: 'Message Content',
            life: 3000,
          });
        },
      });
  }
}
