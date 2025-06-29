import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

export enum EButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum EButtonMode {
  NORMAL = 'normal',
  FULL = 'full',
}

@Component({
  selector: 'app-button-flat',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonModule, RippleModule, NgClass],
  template: `<button
    pButton
    pRipple
    [label]="label()"
    (click)="onClick()"
    [class]="getStyleClass()"
    [ngClass]="{
      'w-full': mode() === EButtonMode.FULL,
      'w-fit': mode() === EButtonMode.NORMAL
    }"
  ></button>`,
  styles: ``,
})
export class ButtonFlatComponent {
  public label = input.required<string>();
  public type = input<EButtonType>(EButtonType.PRIMARY);
  public mode = input<EButtonMode>(EButtonMode.NORMAL);

  public readonly EButtonMode = EButtonMode;

  public clickEmitter = output();

  public readonly ButtonClassMap: Record<EButtonType, string> = {
    [EButtonType.PRIMARY]: 'bg-primary',
    [EButtonType.SECONDARY]: 'bg-secondary',
  };

  public getStyleClass(): string {
    return `text-white ${this.ButtonClassMap[this.type()]}`;
  }

  public onClick(): void {
    this.clickEmitter.emit();
  }
}
