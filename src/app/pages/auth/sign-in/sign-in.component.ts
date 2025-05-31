import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InvalidTextDirective } from '../../../core/directives/invalid-text.directive';
import { AuthApiService } from '../../../api/services/auth-api.service';
import { SignIn } from '../../../../types/auth.type';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    FormsModule,
    InputTextModule,
    InvalidTextDirective,
  ],
  providers: [AuthApiService],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  authApiService = inject(AuthApiService);

  signInBody: SignIn = {
    email: '',
    password: '',
  };

  onSubmit = () => {
    this.authApiService.signIn(this.signInBody).subscribe(console.log);
  };
}
