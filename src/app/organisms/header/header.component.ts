import { Component, ViewEncapsulation } from '@angular/core';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { HeaderActionsComponent } from './header-actions/header-actions.component';

@Component({
  selector: 'app-header',
  imports: [
    HeaderTitleComponent,
    HeaderSearchComponent,
    HeaderActionsComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
