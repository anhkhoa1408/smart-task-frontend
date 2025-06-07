import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { SidebarMenuItemComponent } from '../sidebar-menu-item/sidebar-menu-item.component';
import { SidebarMenuItem } from '../../../../types/sidebar.type';

@Component({
  selector: 'app-sidebar-menu',
  imports: [FontAwesomeModule, SidebarMenuItemComponent],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss',
})
export class SidebarMenuComponent {
  sidebarMenuItems: SidebarMenuItem[] = [
    {
      title: 'Home',
      url: '/dashboard/home',
      icon: faHome,
    },
  ];
}
