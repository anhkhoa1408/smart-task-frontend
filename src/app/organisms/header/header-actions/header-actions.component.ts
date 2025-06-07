import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header-actions',
    imports: [FontAwesomeModule],
    templateUrl: './header-actions.component.html',
    styleUrl: './header-actions.component.scss'
})
export class HeaderActionsComponent {
  faUser = faUser;
}
