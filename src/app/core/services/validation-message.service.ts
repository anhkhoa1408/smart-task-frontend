import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Injectable()
export class ValidationMessageService {
  public getErrorMessages(errors?: ValidationErrors | null): string[] {
    if (!errors) {
      return [];
    }
    return Object.keys(errors).map((key) =>
      this.getErrorMessage(key, errors[key])
    );
  }

  private getErrorMessage(key: string, value: any): string {
    switch (key) {
      case 'required':
        return 'This field is required.';
      case 'minlength':
        return `Minimum length is ${value.requiredLength}.`;
      case 'maxlength':
        return `Maximum length is ${value.requiredLength}.`;
      case 'pattern':
        return 'Invalid format.';
      case 'email':
        return 'Invalid email format.';
      case 'passwordMismatch':
        return 'Passwords do not match.';
      default:
        return 'Unknown error.';
    }
  }
}
