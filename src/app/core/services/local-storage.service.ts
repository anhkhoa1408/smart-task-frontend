import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private localstorage!: Storage;
  private isEnabled: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (!window.localStorage) {
      this.isEnabled = false;
      throw new Error(
        'LocalStorage is not supported in this environment. Please check your browser settings or use a different environment.'
      );
    }
    this.localstorage = window.localStorage;
    this.isEnabled = true;
  }

  public setItem<T = unknown>(key: string, value: T): void {
    if (isPlatformBrowser(this.platformId) && this.isEnabled) {
      this.localstorage.setItem(key, JSON.stringify(value));
    }
  }

  public getItem<T = unknown>(key: string): T | null {
    if (isPlatformBrowser(this.platformId) && this.isEnabled) {
      const value = this.localstorage.getItem(key);
      return value ? (JSON.parse(value) as T) : null;
    }
    return null;
  }

  public removeItem(key: string): void {
    if (isPlatformBrowser(this.platformId) && this.isEnabled) {
      this.localstorage.removeItem(key);
    }
  }

  public clear(): void {
    if (isPlatformBrowser(this.platformId) && this.isEnabled) {
      this.localstorage.clear();
    }
  }
}
