import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import lanzamientosJS from '../assets/data/launches.json';
import estadosJS from '../assets/data/launchstatus.json';
import agenciasJS from '../assets/data/agencies.json';
import tiposJS from '../assets/data/missiontypes.json';

export interface Action {
  readonly type: ActionTypes;
  readonly payload?: any;
}

export enum ActionTypes {
  porAgencias, porTipos, porEstados
}

export type Actions = PorAgencias | PorTipos | PorEstados;

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private lanzamientos: any[];
  private lanzamientos$ = new Subject<any[]>();
  constructor() {}

  public dispatch (action: Actions) {
    switch (action.type) {
      case ActionTypes.porAgencias:
      this.lanzamientos = [];
      if ( action.payload.length !== 0 ) {
        agenciasJS.agencies.forEach( (agen) => {
          if ( agen.name.toLowerCase().includes(action.payload) ) {
            lanzamientosJS.launches.forEach( (lanza) => {
            lanza.missions.forEach( (misi) => {
              if ( misi.agencies !== null ) {
                misi.agencies.forEach ( (agenlan) => {
                  if ( agenlan.name === agen.name ) {
                  //  this.contador.contenido ++;
                    this.lanzamientos.push(lanza);
                    }
                  });
                }
              });
            });
          }
        });
      }
      break;
      case ActionTypes.porTipos:
      this.lanzamientos = [];
      if ( action.payload.length !== 0 ) {
        tiposJS.types.forEach( (tipo) => {
          if ( tipo.name.toLowerCase().includes(action.payload) ) {
            lanzamientosJS.launches.forEach( (lanza) => {
              lanza.missions.forEach( (misi) => {
                if ( tipo.id === misi.type ) {
                //  this.contador.contenido ++;
                  this.lanzamientos.push(lanza );
                }
              });
            });
          }
        });
      }
      break;
      case ActionTypes.porEstados:
      this.lanzamientos = [];
      if ( action.payload.length !== 0 ) {
        lanzamientosJS.launches.forEach( (lanza)  => {
          estadosJS.types.forEach( (esta) => {
            if ( esta.name.toLowerCase().includes(action.payload) || esta.description.toLowerCase().includes(action.payload)  ) {
              if (esta.id === lanza.status) {
              //  this.contador.contenido ++;
                this.lanzamientos.push( lanza);
              }
            }
          });
         });
      }
      break;
    }
    this.lanzamientos$.next(this.getSnapshot());
  }

  public getSnapshot() {
    return this.lanzamientos;
  }

  public select$ = () => this.lanzamientos$.asObservable();
}

export class PorAgencias implements Action {
  public type = ActionTypes.porAgencias;
  constructor (public readonly payload?: any) { }
}

export class PorEstados implements Action {
  public type = ActionTypes.porEstados;
  constructor (public readonly payload?: any) { }
}

export class PorTipos implements Action {
  public type = ActionTypes.porTipos;
  constructor (public readonly payload?: any) { }
}
