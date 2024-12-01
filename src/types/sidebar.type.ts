import { IconDefinition } from '@fortawesome/angular-fontawesome';

export interface SidebarMenuItem {
  title: string;
  url: string;
  children?: SidebarMenuItem[];
  icon: IconDefinition;
}
