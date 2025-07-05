import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import AppPreset from './providers/AppPreset';
import { MessageService } from 'primeng/api';
import { LoadingService } from './core/services/loading.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: AppPreset,
        options: {
          darkModeSelector: '.fake-dark-selector',
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng, utilities',
          },
        },
      },
    }),
    MessageService,
    LoadingService,
  ],
};
