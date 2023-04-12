import { datosUsuarios } from './../../datosUsuarios.service';
import { DatosTabla } from './tabla.interfaz';
import { TablaService } from './tabla.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {
  displayedColumns = ['cryptoname', 'value', 'asset', 'stock'];
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

  ngOnInit(): void {
    this.usuarioLogeado = this.datosUsuarios.obtenerUsuario();
  }
  ngAfterViewInit() {
    this.tablaService
      .getDatosUsuarios(this.usuarioLogeado)
      .subscribe((datos) => (this.dataSource.data = datos));

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.dataSource);
  }

  getUsers() {
    this.tablaService.getUsers().subscribe((datos) => {
      this.dataSource.data = datos;
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
