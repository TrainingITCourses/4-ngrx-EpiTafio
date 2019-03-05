import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  PorAgencias, PorEstados, PorTipos, Graba } from '../reducers/lanzamiento.actions';
import { State } from '../reducers/lanzamiento.reducer';


@Component({
  selector: 'app-contenedor-container',
  templateUrl: './contenedor-container.component.html',
  styleUrls: ['./contenedor-container.component.css']
})
export class ContenedorContainerComponent implements OnInit {

  public lanzamientos: Array<any>;
  public contador  = { cantidad: 0 };
  public filtro = { criterio: 0 };

  constructor(private store: Store<State>) {}

  ngOnInit = () => {
    this.lanzamientos = [];
    this.store.select('lanzamiento').subscribe(value => ( this.lanzamientos = value));
    this.store.select('lanzamiento').subscribe(valor => ( this.contador = valor));
  }
  onSearch = (searchText: any) =>  {

    this.filtra(searchText);
  }

  onFiltratipo = (opcion: any) => {
    this.filtro.criterio = opcion;
  }

  onGraba = () => this.store.dispatch(new Graba(this.lanzamientos));

  filtra = (searchText: any) => {
    const search = searchText.toLowerCase();
        if  ( 1 == this.filtro.criterio )  {
          this.store.dispatch(new PorEstados(search));
        } else if ( this.filtro.criterio == 2) {
          this.store.dispatch(new PorAgencias(search));
        } else if ( this.filtro.criterio == 3 ) {
          this.store.dispatch(new PorTipos(search));
        } else {
          console.log('"Invalid choice"');
          this.lanzamientos.push('¡¡¡ ELIJA CRITERIO !!! ');
        }
  }
}
