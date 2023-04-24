import { DatosTabla } from './tabla.interfaz';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TablaService {
  private REST_API_SERVER = 'http://localhost:8532';

  constructor(private httpClient: HttpClient) {}
  getDatosUsuarios(name: string): Observable<DatosTabla[]> {
    return this.httpClient.get<DatosTabla[]>(
      this.REST_API_SERVER + '/api/cryptointermedio/get/1'
    );
  }
  getCryptos(): Observable<any> {
    return this.httpClient.get(this.REST_API_SERVER + '/api/cryptos/all');
  }
  // updateCryptoUser(
  //   crypto_id: string,
  //   user_id: string,
  //   amount: number
  // ): Observable<any> {
  //   return this.httpClient.post(
  //     this.REST_API_SERVER + '/api/cryptointermedio/update',
  //     {
  //       crypto_id,
  //       user_id,
  //       amount,
  //     }
  //   );
  // }
}
