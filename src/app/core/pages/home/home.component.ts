import { Component } from '@angular/core';
import { HeaderComponent } from '../../molecules/header/header.component';
import { HeaderDataService } from '../../molecules/header/services/header-data.service';
import { TaskTableComponent } from '../../organisms/task-table/task-table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, TaskTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private readonly headerDataService: HeaderDataService) {
    this.headerDataService.sendData('Home');
  }
}
