import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class HeaderDataService implements OnDestroy {
  private dataSubject = new BehaviorSubject<string>('');
  data$ = this.dataSubject.asObservable();

  sendData(data: string) {
    this.dataSubject.next(data);
  }

  ngOnDestroy(): void {
    this.dataSubject.unsubscribe();
  }
}
