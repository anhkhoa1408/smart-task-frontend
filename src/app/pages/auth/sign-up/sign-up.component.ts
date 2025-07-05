import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { finalize } from 'rxjs/internal/operators/finalize';
import { AuthApiService } from '../../../api/services/auth-api.service';
import {
  ButtonFlatComponent,
  EButtonMode,
} from '../../../atoms/button-flat/button-flat.component';
import { InputComponent } from '../../../atoms/input/input.component';
import { AppRoutingConstant } from '../../../core/constants/app-routing.constants';
import { LoadingService } from '../../../core/services/loading.service';
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
  private readonly loadingService = inject(LoadingService);
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);
  private readonly authApiService = inject(AuthApiService);
  private readonly messageService = inject(MessageService);
  private readonly destroyRef = inject(DestroyRef);

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

    this.loadingService.show();
    const { name, email, password } = this.formGroup.value;
    this.authApiService
      .signUp({
        name: name!,
        email: email!,
        password: password!,
      })
      .pipe(
        finalize(() => this.loadingService.hide()),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: () => {
          this.router.navigateByUrl(AppRoutingConstant.SIGN_IN);
          this.messageService.add({
            severity: 'success',
            summary: 'Sign-up successful',
            detail: 'You have successfully registered.',
            life: 3000,
          });
        },
        error: (error: Error) => {
          console.error('Sign-up failed:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Sign-up failed',
            detail: 'Please check your information and try again.',
            life: 3000,
          });
        },
      });
  }
}
