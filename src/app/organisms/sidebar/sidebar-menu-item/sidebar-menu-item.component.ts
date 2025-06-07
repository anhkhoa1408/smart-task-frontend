import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarMenuItem } from '../../../../types/sidebar.type';

@Component({
  selector: 'app-sidebar-menu-item',
  imports: [FontAwesomeModule],
  templateUrl: './sidebar-menu-item.component.html',
  styleUrl: './sidebar-menu-item.component.scss',
})
export class SidebarMenuItemComponent {
  menuProps = input.required<SidebarMenuItem>();
}
