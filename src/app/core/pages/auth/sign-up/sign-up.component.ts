import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, NgModel } from '@angular/forms';
import { InvalidTextDirective } from '../../../directives/invalid-text.directive';
import { AuthApiService } from '../../../../api/services/auth-api.service';
import { SignUp } from '../../../../../types/auth.type';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    FormsModule,
    InputTextModule,
    InvalidTextDirective,
  ],
  providers: [AuthApiService],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  @ViewChild('confirmPassword', {
    read: NgModel,
  })
  confirmPassword!: NgModel;
  authApiService = inject(AuthApiService);

  signUpBody: SignUp = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  onSubmit = () => {
    console.log(this.confirmPassword.value);
    // return this.authApiService.signUp(this.signUpBody).subscribe(console.log);
  };
}
