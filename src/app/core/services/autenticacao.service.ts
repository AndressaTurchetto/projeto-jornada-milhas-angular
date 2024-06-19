import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

    autenticar(email: string, senha: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/auth/login`, { email, senha })
    }
}
