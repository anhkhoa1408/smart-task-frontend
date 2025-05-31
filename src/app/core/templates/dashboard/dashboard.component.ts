import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderDataService } from '../../molecules/header/services/header-data.service';
import { SidebarComponent } from '../../molecules/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  providers: [HeaderDataService],
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
