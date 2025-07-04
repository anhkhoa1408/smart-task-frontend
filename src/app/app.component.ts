import { Component } from '@angular/core';
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

@Component({
  selector: 'app-root',
  imports: [FontAwesomeModule, RouterOutlet, Toast],
  standalone: true,
  template: `
    <p-toast />
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  public title = 'smart-task-frontend';

  constructor(library: FaIconLibrary) {
    library.addIcons(faHouse, faListCheck, faList, faChevronDown);
  }
}
