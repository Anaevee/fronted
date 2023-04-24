import { Usuario } from './../../usuarios.interfaz';
import { datosUsuarios } from './../../datosUsuarios.service';
import { DatosTabla } from './tabla.interfaz';
import { TablaService } from './tabla.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
// import { updateCrypto } from './tabla.interfaz';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {
  displayedColumns = ['cryptoname', 'value', 'asset', 'stock', 'actions'];
  dataSource: MatTableDataSource<DatosTabla> =
    new MatTableDataSource<DatosTabla>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  usuarioLogeado: string = '';
  constructor(
    private tablaService: TablaService,
    private datosUsuarios: datosUsuarios
  ) {}
  usuario: DatosTabla[] = [];
  // cryptoUser: updateCrypto[] = [];

  ngOnInit(): void {
    this.tablaService.getCryptos().subscribe((datos) => {
      this.dataSource.data = datos;
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.usuarioLogeado = this.datosUsuarios.obtenerUsuario();

    // let userId = ''
    //     if (this.usuarioLogeado) {
    //         userId = this.datosUsuarios.decodeToken().userId;
    //     }
    //     this.datosUsuarios.updateCrypto().subscribe((data: CryptoUser[]) => {
    //         this.cryptoUser = data;
    //         console.log(this.cryptoUser);

    //         this.datosUsuarios
    //             .updateCrypto()
    //             .subscribe((data: CryptoUser[]) => {
    //                 this.cryptoUser = data;
    //                 console.log(this.cryptoUser);

    //                 this.cryptoUser.forEach(
    //                     =>
    //                         (crypto = this.cryptoUser.find(
    //                              => crypto === crypto
    //                         ))
    //                 );
    //                 this.dataSource.data = this.cryptoUser.filter(
    //                      => userId === userId
    //                 );
    //                 console.log(this.dataSource.data.length);
    //             });
    //     });
    //     console.log(userId);
    // }
  }
  ngAfterViewInit() {
    this.tablaService
      .getDatosUsuarios(this.usuarioLogeado)
      .subscribe((datos) => (this.usuario = datos));

    console.log(this.usuario);
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
