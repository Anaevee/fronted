import { Usuario } from './usuarios.interfaz';
import { Injectable } from '@angular/core';
import { registro } from './usuarios.interfaz';

@Injectable({
  providedIn: 'root',
})
export class datosUsuarios {
  CLAVE_LOCAL_STORAGE = 'crypto';

  constructor() {}

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
}
