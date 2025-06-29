import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
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
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [InputTextModule, NgClass],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
    ValidationMessageService,
  ],
  template: `
    <section class="input__section flex flex-col gap-2">
      <label class="text-sm" [class.required]="required()">{{ label() }}</label>
      <input
        pInputText
        [type]="type()"
        [placeholder]="placeholder()"
        [attr.minLength]="minLength()"
        [attr.maxLength]="maxLength()"
        [attr.pattern]="pattern()"
        [attr.min]="min()"
        [attr.max]="max()"
        (input)="onInput($event)"
        (blur)="onBlur()"
        [ngClass]="{
          'ng-invalid ng-dirty border-red-500': isInvalid(),
        }"
        #inputRef
      />

      @if (isInvalid()) {
      <div class="flex flex-col gap-1">
        @for (error of
        validationMessageService.getErrorMessages(control.errors); track error)
        {
        <p class="text-red-500 text-xs">
          {{ error }}
        </p>
        }
      </div>
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
            font-size: var(--text-sm);

            &::placeholder {
              font-size: var(--text-xs);
              color: var(--color-gray-300);
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
export class InputComponent implements ControlValueAccessor, DoCheck {
  private inputRef = viewChild<ElementRef<HTMLInputElement>>('inputRef');

  public type = input<HTMLInputElement['type']>('text');
  public label = input('');
  public placeholder = input<string>('');
  public required = input(false);
  public minLength = input<number | null>(null);
  public maxLength = input<number | null>(null);
  public min = input<number | null>(null);
  public max = input<number | null>(null);
  public pattern = input<string | RegExp | null>(null);

  public readonly validationMessageService = inject(ValidationMessageService);

  private readonly renderer = inject(Renderer2);
  private readonly injector = inject(Injector);
  private readonly cdr = inject(ChangeDetectorRef);

  private onChange: (value: string) => void = () => {};

  private onTouched: () => void = () => {};

  public get control(): NgControl {
    return this.injector.get(NgControl);
  }

  public isInvalid(): boolean {
    return !!(this.control.invalid && this.control.touched);
  }

  public writeValue(value: string): void {
    this.renderer.setProperty(this.inputRef()?.nativeElement, 'value', value);
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(
      this.inputRef()?.nativeElement,
      'disabled',
      isDisabled
    );
  }

  public onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.onChange(input.value);
    this.onTouched();
  }

  public onBlur(): void {
    this.onTouched();
  }

  public ngDoCheck(): void {
    if (this.control.invalid) {
      this.cdr.markForCheck();
    }
  }
}
