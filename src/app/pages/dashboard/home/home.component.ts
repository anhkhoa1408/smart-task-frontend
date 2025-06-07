import { Component } from '@angular/core';
import { HeaderComponent } from '../../../layout/dashboard/header/header.component';
import { HeaderDataService } from '../../../layout/dashboard/header/services/header-data.service';
import { TaskTableComponent } from '../../../core/organisms/task-table/task-table.component';

@Component({
    selector: 'app-home',
    imports: [HeaderComponent, TaskTableComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private readonly headerDataService: HeaderDataService) {
    this.headerDataService.sendData('Home');
  }
}
