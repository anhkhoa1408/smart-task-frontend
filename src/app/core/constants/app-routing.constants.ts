export class AppRoutingConstant {
  static readonly AUTH = 'auth';
  static readonly SIGN_IN = 'sign-in';
  static readonly SIGN_UP = 'sign-up';
  static readonly DASHBOARD = 'dashboard';
  static readonly HOME = 'home';

  static readonly AUTH_SIGN_IN = `${this.AUTH}/${this.SIGN_IN}`;
  static readonly AUTH_SIGN_UP = `${this.AUTH}/${this.SIGN_UP}`;
  static readonly DASHBOARD_HOME = `${this.DASHBOARD}/${this.HOME}`;
}
