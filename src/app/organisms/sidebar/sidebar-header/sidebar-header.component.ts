import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="flex items-center gap-[6px] py-5 px-3">
      <img src="/logo/logo.png" class="size-[32px]" />
      <p class="text-xl font-semibold">
        <span class="text-primary">Smart </span>
        <span class="text-secondary">Task</span>
      </p>
    </div>
  `,
  styles: [``],
})
export class SidebarHeaderComponent {}
