import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { registro } from 'src/app/usuarios.interfaz';
import { datosUsuarios } from './../../datosUsuarios.service';
import { Usuario } from 'src/app/usuarios.interfaz';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public datosUsuarios: datosUsuarios, private router: Router) {}

  desloguearse() {
    this.datosUsuarios.desloguarse();
    this.router.navigate(['/']);
  }

  usuario = this.datosUsuarios.decodeToken();

  ngOnInit(): void {
    console.log(this.usuario);
  }
}
