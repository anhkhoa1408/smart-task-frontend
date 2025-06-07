import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-task-table',
    imports: [TableModule],
    templateUrl: './task-table.component.html',
    styleUrl: './task-table.component.scss'
})
export class TaskTableComponent {
  tasks: unknown[] = [];
}
