import { FormGroup, ValidationErrors } from '@angular/forms';

export const passwordMatchingValidator = (
  formGroup: FormGroup
): ValidationErrors | null => {
  const password = formGroup.get('password');
  const confirmPassword = formGroup.get('confirmPassword');

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
