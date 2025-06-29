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

@Component({
  selector: 'app-root',
  imports: [FontAwesomeModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './../assets/styles/index.scss',
})
export class AppComponent {
  public title = 'smart-task-frontend';

  constructor(library: FaIconLibrary) {
    library.addIcons(faHouse, faListCheck, faList, faChevronDown);
  }
}
