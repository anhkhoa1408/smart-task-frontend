import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AuthApiService } from '../../../api/services/auth-api.service';
import {
  ButtonFlatComponent,
  EButtonMode,
} from '../../../atoms/button-flat/button-flat.component';
import { InputComponent } from '../../../atoms/input/input.component';
import { AppRoutingConstant } from '../../../core/constants/app-routing.constants';
import { catchError, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';
import { AuthStore } from '../_store/auth.store';

@Component({
  selector: 'app-sign-in',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    FormsModule,
    ButtonFlatComponent,
    ReactiveFormsModule,
    InputComponent,
  ],
  providers: [AuthApiService, AuthStore],
  template: `
    <form
      [formGroup]="formGroup"
      (ngSubmit)="onSubmit()"
      class="flex flex-col min-w-[400px] gap-6 px-6 py-10 bg-white shadow-lg rounded-xl"
    >
      <h1 class="text-center text-2xl font-semibold">Welcome back!</h1>
      <app-input
        type="email"
        placeholder="Eg: email@example.com"
        formControlName="email"
        label="Email"
        [required]="true"
      />
      <app-input
        label="Password"
        placeholder="Enter your password"
        [required]="true"
        formControlName="password"
        type="password"
      />
      <div class="p-fluid">
        <app-button-flat label="Sign in" [mode]="EButtonMode.FULL" />
      </div>
    </form>
  `,
})
export class SignInComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authApiService = inject(AuthApiService);
  private readonly messageService = inject(MessageService);
  private readonly authStore = inject(AuthStore);

  public readonly EButtonMode = EButtonMode;

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

    const { email, password } = this.formGroup.value;
    this.authApiService
      .signIn({
        email: email!,
        password: password!,
      })
      .subscribe({
        next: (response: any) => {
          console.log(' onSubmit - response:', response);

          this.router.navigateByUrl(AppRoutingConstant.DASHBOARD_PROJECT);
          this.authStore.setProfile(response);
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
