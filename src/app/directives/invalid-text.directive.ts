import { Directive } from '@angular/core';

@Directive({
  selector: '[appInvalidText]',
  standalone: true,
  host: {
    class: 'text-sm text-red-500',
  },
})
export class InvalidTextDirective {
  constructor() {}
}
