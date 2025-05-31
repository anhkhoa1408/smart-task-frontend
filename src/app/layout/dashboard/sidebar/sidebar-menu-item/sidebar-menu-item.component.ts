import { Component, input } from '@angular/core';
import { SidebarMenuItem } from '../../../../../types/sidebar.type';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sidebar-menu-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './sidebar-menu-item.component.html',
  styleUrl: './sidebar-menu-item.component.scss',
})
export class SidebarMenuItemComponent {
  menuProps = input.required<SidebarMenuItem>();
}
