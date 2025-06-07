import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../layout/dashboard/sidebar/sidebar.component';
import { HeaderDataService } from '../../layout/dashboard/header/services/header-data.service';

@Component({
    selector: 'app-dashboard',
    providers: [HeaderDataService],
    imports: [RouterOutlet, SidebarComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {}
