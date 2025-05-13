import { Injectable } from '@angular/core';
import { BaseApiService } from '../base-api.service';
import { SignIn, SignUp } from '../../../types/auth.type';

@Injectable()
export class AuthApiService extends BaseApiService {
  public signIn(body: SignIn) {
    return this.post('auth/sign-in', body);
  }

  public signUp(body: SignUp) {
    return this.post('auth/sign-up', body);
  }
}
