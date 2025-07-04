import { inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { LocalStorageConstant } from '../../../core/constants/local-storage.constants';
import { LocalStorageService } from '../../../core/services/local-storage.service';

interface AuthState {
  accessToken: string;
  name: string;
  email: string;
}

const initialState: AuthState = {
  accessToken: '',
  name: '',
  email: '',
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    const localStorageService = inject(LocalStorageService);
    return {
      setProfile(authState: AuthState) {
        patchState(store, authState);
        localStorageService.setItem<AuthState>(
          LocalStorageConstant.AUTH,
          authState
        );
      },
    };
  }),
  withHooks({
    onInit: (store) => {
      const localStorageService = inject(LocalStorageService);
      const auth = localStorageService.getItem<AuthState>(
        LocalStorageConstant.AUTH
      );
      if (auth) {
        patchState(store, auth);
      }
    },
  })
);
