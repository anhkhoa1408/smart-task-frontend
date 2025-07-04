import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

export const passwordMatchingValidator = (
  formControl: FormControl
): ValidationErrors | null => {
  const password = formControl.parent?.get('password');
  const confirmPassword = formControl?.parent?.get('confirmPassword');

  if (!password || !confirmPassword) {
    return null;
  }

  if (password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  } else {
    confirmPassword.setErrors(null);
    return null;
  }
};
