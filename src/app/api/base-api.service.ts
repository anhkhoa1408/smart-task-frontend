import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseApiService {
  protected readonly httpClient = inject(HttpClient);

  public get<T>(endpoint: string, params: HttpParams) {
    return this.httpClient.get<T>(`${environment.apiUrl}/${endpoint}`, {
      params,
    });
  }

  public post<T>(endpoint: string, body: T) {
    return this.httpClient.post(`${environment.apiUrl}/${endpoint}`, body);
  }

  public put<T>(endpoint: string, body: T) {
    return this.httpClient.put(`${environment.apiUrl}/${endpoint}`, body);
  }

  public delete<T>(endpoint: string, params: HttpParams) {
    return this.httpClient.delete(`${environment.apiUrl}/${endpoint}`, {
      params,
    });
  }
}
