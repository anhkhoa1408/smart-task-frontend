import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-project-wrapper',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  template: `<section class="project__section">
    <router-outlet></router-outlet>
    <router-outlet name="project"></router-outlet>
  </section>`,
  styles: ``,
})
export class ProjectWrapperComponent {}
