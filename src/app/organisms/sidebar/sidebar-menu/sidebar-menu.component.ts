import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuItem, MessageService } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { filter, map } from 'rxjs';
import { AppRoutingConstant } from '../../../core/constants/app-routing.constants';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FontAwesomeModule, PanelMenu, RouterLink],
  providers: [MessageService],
  template: `
    <p-panelmenu [model]="items" styleClass="w-full md:w-80">
      <ng-template #item let-item>
        @if ( item.route ) {
        <a
          [routerLink]="item.route"
          class="flex items-center cursor-pointer px-3 py-2 nav-link"
          [class.active]="item.active"
        >
          <fa-icon [icon]="item.icon" />
          <span class="ml-3 text-sm">{{ item.label }}</span>
        </a>
        } @else {
        <div
          class="flex items-center cursor-pointer px-3 py-2 nav-group"
          [class.active]="item.expanded"
        >
          <fa-icon [icon]="item.icon"></fa-icon>
          <span class="ml-3 text-sm">{{ item.label }}</span>
          <fa-icon icon="chevron-down" class="ml-auto toggle" />
        </div>
        }
      </ng-template>
    </p-panelmenu>
  `,
  styles: [
    `
      :host {
        ::ng-deep .p-panelmenu {
          gap: 0.125rem;

          .p-panelmenu-panel {
            border: none;

            .p-panelmenu-header fa-icon.toggle {
              transition: transform 0.2s ease;
            }

            :where(
                .p-panelmenu-header
                  .p-panelmenu-header-content
                  > .nav-link.active,
                .p-panelmenu-header
                  .p-panelmenu-header-content
                  > .nav-group.active
              ) {
              color: var(--primary-color);
              background: var(--primary-50);
              position: relative;

              &::after {
                content: '';
                position: absolute;
                width: 4px;
                border-radius: 2px;
                height: 100%;
                top: 0;
                right: 0;
                background: var(--primary-color);
              }

              fa-icon.toggle {
                transform: rotate(180deg);
              }
            }

            .p-panelmenu-content-container {
              gap: 0.25rem;
              .p-panelmenu-content {
                .p-panelmenu-submenu {
                  display: flex;
                  flex-direction: column;
                  gap: 0.125rem;
                  margin-top: 0.5rem;
                }

                .p-panelmenu-item-content {
                  .nav-link.active {
                    color: var(--primary-color);
                  }
                }
              }
            }
          }
        }
      }
    `,
  ],
})
export class SidebarMenuComponent implements OnInit {
  private readonly router = inject(Router);

  public items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'house',
      route: AppRoutingConstant.HOME,
      active: false,
    },
    {
      label: 'Project',
      icon: 'list-check',
      expanded: false,
      items: [
        {
          label: 'Your Projects',
          icon: 'list',
          route: AppRoutingConstant.PROJECT,
          active: false,
        },
      ],
    },
  ];

  ngOnInit() {
    this.items = this.checkActiveRoutes();
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.checkActiveRoutes())
      )
      .subscribe((newItems: MenuItem[]) => {
        this.items = newItems;
      });
  }

  private checkActiveRoutes(): MenuItem[] {
    const urlSegments = this.router.url.split('/');
    const currentRoute = urlSegments[urlSegments.length - 1];
    let newItems = this.items;
    for (const item of newItems) {
      if (item['route'] === currentRoute) {
        item['active'] = true;
      } else {
        item['active'] = false;
      }

      if (item.items) {
        for (const subItem of item.items) {
          if (subItem['route'] === currentRoute) {
            subItem['active'] = true;
            item['expanded'] = true;
          } else {
            subItem['active'] = false;
          }
        }
      }
    }

    return newItems;
  }
}
