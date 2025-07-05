import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
  faHouse,
  faList,
  faListCheck,
} from '@fortawesome/free-solid-svg-icons';
import { Toast } from 'primeng/toast';
import { LoadingComponent } from './molecules/loading/loading.component';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  imports: [FontAwesomeModule, RouterOutlet, Toast, LoadingComponent],
  standalone: true,
  template: `
    <p-toast />
    @if (loadingService.isLoading()) {
    <app-loading />
    }
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  public readonly loadingService = inject(LoadingService);

  public title = 'smart-task-frontend';

  constructor(library: FaIconLibrary) {
    library.addIcons(faHouse, faListCheck, faList, faChevronDown);
  }
}
