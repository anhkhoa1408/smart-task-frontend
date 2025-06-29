import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarHeaderComponent } from './sidebar-header/sidebar-header.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SidebarHeaderComponent, SidebarMenuComponent],
  template: `
    <aside class="flex flex-col px-2">
      <app-sidebar-header></app-sidebar-header>
      <app-sidebar-menu></app-sidebar-menu>
    </aside>
  `,
  styles: [
    `
      $sidebar-active-width: 280px;
      $sidebar-collapse-width: 80px;

      :host {
        min-height: 100vh;
        flex: 0 0 $sidebar-active-width;

        aside {
          height: 100%;
          background-color: white;
        }
      }
    `,
  ],
})
export class SidebarComponent {}
