import { datosUsuarios } from './../../datosUsuarios.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-registro',
  templateUrl: './login-registro.component.html',
  styleUrls: ['./login-registro.component.scss'],
})
export class LoginRegistroComponent implements OnInit {
  inicioSesion: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  registro = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z0-9]+$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(50),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private datosUsuarios: datosUsuarios, private router: Router) {}

  guardarUsuario() {
    let login = this.inicioSesion.value.name;
    this.datosUsuarios.guardarUsuario(login);
    this.router.navigate(['/tabla']);
  }

  obtenerTodoUsuario() {
    let registro = this.registro.value.datos;
    this.datosUsuarios.obtenerTodoUsuario();
  }

  guardarUsuarioRegistro() {
    let registro = this.registro.value.name;
    console.log(registro);
    this.datosUsuarios.guardarUsuario(registro);
  }
  ngOnInit(): void {}
}
