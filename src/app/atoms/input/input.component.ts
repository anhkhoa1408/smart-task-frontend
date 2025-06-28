import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  inject,
  Injector,
  input,
  Renderer2,
  viewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ValidationMessageService } from '../../core/services/validation-message.service';

@Component({
  selector: 'app-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [InputTextModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  template: `
    <section class="input__section flex flex-col gap-2">
      <label [class.required]="required()">{{ label() }}</label>
      <input
        pInputText
        [type]="type()"
        [attr.minLength]="minLength()"
        [attr.maxLength]="maxLength()"
        [attr.pattern]="pattern()"
        [attr.min]="min()"
        [attr.max]="max()"
        (input)="onInput($event)"
        (blur)="onBlur()"
        [class.error]="control.invalid && control.touched"
        #inputRef
      />

      @if (control.invalid && control.touched) {
      <p class="text-red-500 text-sm">
        {{ validationMessageService.getErrorMessages(control.errors) }}
      </p>
      }
    </section>
  `,
  styles: [
    `
      :host {
        display: block;

        .input__section {
          input {
            width: 100%;

            &.error {
              border: 1px solid var(--color-red-500);
            }
          }

          label {
            position: relative;
            width: fit-content;

            &.required::before {
              content: '*';
              position: absolute;
              right: -0.75rem;
              color: red;
            }
          }
        }
      }
    `,
  ],
})
export class InputComponent implements ControlValueAccessor {
  private inputRef = viewChild<ElementRef<HTMLInputElement>>('inputRef');

  public type = input<HTMLInputElement['type']>('text');
  public label = input('');
  public required = input(false);
  public minLength = input<number | null>(null);
  public maxLength = input<number | null>(null);
  public min = input<number | null>(null);
  public max = input<number | null>(null);
  public pattern = input<string | RegExp | null>(null);

  public readonly validationMessageService = inject(ValidationMessageService);
  private readonly renderer = inject(Renderer2);
  private readonly injector = inject(Injector);

  private onChange: (value: string) => void = () => {};

  private onTouched: () => void = () => {};

  public get control(): NgControl {
    return this.injector.get(NgControl);
  }

  writeValue(value: string): void {
    this.renderer.setProperty(this.inputRef()?.nativeElement, 'value', value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(
      this.inputRef()?.nativeElement,
      'disabled',
      isDisabled
    );
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.onChange(input.value);
    this.onTouched();
  }

  onBlur(): void {
    this.onTouched();
  }
}
