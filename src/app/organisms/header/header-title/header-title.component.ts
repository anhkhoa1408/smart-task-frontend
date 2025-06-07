import { Component, OnInit } from '@angular/core';
import { HeaderDataService } from '../services/header-data.service';

@Component({
    selector: 'app-header-title',
    imports: [],
    templateUrl: './header-title.component.html',
    styleUrl: './header-title.component.scss'
})
export class HeaderTitleComponent implements OnInit {
  title = '';

  constructor(private readonly headerDataService: HeaderDataService) {}

  ngOnInit(): void {
    this.headerDataService.data$.subscribe((data) => {
      this.title = data;
    });
  }
}
