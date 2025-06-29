import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  template: `
    <div class="flex h-screen items-center justify-center relative">
      <router-outlet />
      <img
        src="/background/wave.svg"
        class="absolute bottom-0 left-0 right-0 -z-10"
      />
    </div>
  `,
  styles: ``,
})
export class AuthComponent {}
