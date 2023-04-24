import { Observable } from 'rxjs';
import { Usuario } from './usuarios.interfaz';
import { Injectable } from '@angular/core';
import { registro } from './usuarios.interfaz';
import { HttpClient } from '@angular/common/http';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class datosUsuarios {
  CLAVE_LOCAL_STORAGE = 'crypto';

  constructor(private http: HttpClient) {}

  obtenerUsuario(): string {
    return JSON.parse(localStorage.getItem(this.CLAVE_LOCAL_STORAGE) || '');
  }

  guardarUsuario(login: Usuario) {
    localStorage.setItem(this.CLAVE_LOCAL_STORAGE, JSON.stringify(login));
  }

  obtenerTodoUsuario(): string {
    return JSON.parse(localStorage.getItem(this.CLAVE_LOCAL_STORAGE) || '');
  }
  guardarUsuarioRegistro(registro: registro) {
    localStorage.setItem(this.CLAVE_LOCAL_STORAGE, JSON.stringify(registro));
  }

  desloguarse() {
    window.localStorage.clear();
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:8532/api/users/login', {
      username,
      password,
    });
  }
  decodeToken(): any {
    const token = this.obtenerTodoUsuario();
    if (token) {
      return jwtDecode(token);
    } else {
      return null;
    }
  }
  updateCrypto(user_id: string, amount: number): Observable<any> {
    return this.http.post('http://localhost:8532/api/criptointermedio/update', {
      user_id,
      amount,
    });
  }
}
