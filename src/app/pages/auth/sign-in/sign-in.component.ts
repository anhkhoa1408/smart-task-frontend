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
  providers: [AuthApiService],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);

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
    this.router.navigateByUrl(AppRoutingConstant.DASHBOARD_PROJECT);
    // if (this.formGroup.invalid) {
    //   this.formGroup.markAllAsTouched();
    //   return;
    // }
  }
}
