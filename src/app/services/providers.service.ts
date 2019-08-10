import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Provider } from '@angular/compiler/src/core';
import { ProviderInterface } from '../models/Provider';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  providerUrl = "https://ngjuan-edc96.firebaseio.com/providers.json";

  constructor(private http: HttpClient) { }

  addProvider(provider: any): Observable<ProviderInterface>{
    return this.http.post<ProviderInterface>(this.providerUrl, provider)
  }
}
