import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';

export enum EButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

@Component({
  selector: 'app-button-flat',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonModule],
  template: `<p-button
    [label]="label()"
    (onclick)="onClick()"
    [styleClass]="getStyleClass()"
  />`,
  styles: ``,
})
export class ButtonFlatComponent {
  public label = input.required<string>();
  public type = input<EButtonType>(EButtonType.PRIMARY);

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
