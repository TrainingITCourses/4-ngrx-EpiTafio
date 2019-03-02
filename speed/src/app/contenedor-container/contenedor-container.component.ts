import { Component, OnInit } from '@angular/core';
import { StoreService, PorAgencias, PorEstados, PorTipos } from '../store.service';
import lanzamientosJS from '../../assets/data/launches.json';
import estadosJS from '../../assets/data/launchstatus.json';
import agenciasJS from '../../assets/data/agencies.json';
import tiposJS from '../../assets/data/missiontypes.json';

@Component({
  selector: 'app-contenedor-container',
  templateUrl: './contenedor-container.component.html',
  styleUrls: ['./contenedor-container.component.css']
})
export class ContenedorContainerComponent implements OnInit {

  public lanzamientos: any[];
  public contador  = { contenido: 0 };
  public filtro = { valor: 0 };

  constructor(private store: StoreService) { }

  ngOnInit() {
    this.lanzamientos = [];
    this.store.select$().subscribe(valor => ( this.lanzamientos = valor));
  }

  onSearch = (searchText: any) =>  {
    this.filtra(searchText);
  }

  onFiltratipo = (opcion: any) => {
    this.filtro.valor = opcion;
    this.lanzamientos = [];
    this.contador.contenido = 0;
  }

  filtra (searchText: any) {
    this.lanzamientos = [];
    this.contador.contenido = 0;
    const search = searchText.toLowerCase();
        if ( 1 == this.filtro.valor ) {
      //    this.porEstados(search);
          this.store.dispatch(new PorEstados(search));
        } else if ( this.filtro.valor == 2) {
         // this.porAgencias(search);
          this.store.dispatch(new PorAgencias(search));
        } else if ( this.filtro.valor == 3 ) {
    //      this.porTipos(search);
          this.store.dispatch(new PorTipos(search));
        } else {
          console.log('"Invalid choice"');
          this.lanzamientos.push('¡¡¡ ELIJA CRITERIO !!! ');
        }

  }


/*
  resetear() {
    this.lanzamientos = [];
    this.contador.contenido = 0;
  }*/
}
