import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  PorAgencias, PorEstados, PorTipos } from '../reducers/lanzamiento.actions';
import { State } from '../reducers/lanzamiento.reducer';


@Component({
  selector: 'app-contenedor-container',
  templateUrl: './contenedor-container.component.html',
  styleUrls: ['./contenedor-container.component.css']
})
export class ContenedorContainerComponent implements OnInit {

  public lanzamientos: any[];
  public contador  = { contenido: 0 };
  public filtro = { valor: 0 };

  constructor(private store: Store<State>) {}

  ngOnInit = () => this.store.select('lanzamiento').subscribe(value => ( this.lanzamientos = value));

  onSearch = (searchText: any) =>  {
    this.filtra(searchText);
  }

  onFiltratipo = (opcion: any) => {
    this.filtro.valor = opcion;
    this.contador.contenido = 0;
  }

  filtra = (searchText: any) => {
  //  this.lanzamientos = [];
    this.contador.contenido = 0;
    const search = searchText.toLowerCase();
        if  ( 1 == this.filtro.valor )  {
          this.store.dispatch(new PorEstados(search));
        } else if ( this.filtro.valor == 2) {
          this.store.dispatch(new PorAgencias(search));
        } else if ( this.filtro.valor == 3 ) {
          this.store.dispatch(new PorTipos(search));
        } else {
          console.log('"Invalid choice"');
          this.lanzamientos.push('¡¡¡ ELIJA CRITERIO !!! ');
        }
  }
}
