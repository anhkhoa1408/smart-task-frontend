import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderDataService } from '../../organisms/header/services/header-data.service';
import { SidebarComponent } from '../../organisms/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  providers: [HeaderDataService],
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
