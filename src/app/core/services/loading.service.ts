import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loading = signal(false);
  public isLoading = this.loading.asReadonly();

  public show(): void {
    this.loading.set(true);
  }

  public hide(): void {
    this.loading.set(false);
  }
}
