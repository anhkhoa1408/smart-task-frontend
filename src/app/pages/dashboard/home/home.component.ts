import { Component } from '@angular/core';
import { HeaderComponent } from '../../../layout/dashboard/header/header.component';
import { HeaderDataService } from '../../../layout/dashboard/header/services/header-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private readonly headerDataService: HeaderDataService) {
    this.headerDataService.sendData('Home');
  }
}
