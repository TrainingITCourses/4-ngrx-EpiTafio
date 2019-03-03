import { Action } from '@ngrx/store';
import { LanzamientoActions, LanzamientoActionTypes } from './lanzamiento.actions';
import { from } from 'rxjs';
import lanzamientosJS from '../../assets/data/launches.json';
import estadosJS from '../../assets/data/launchstatus.json';
import agenciasJS from '../../assets/data/agencies.json';
import tiposJS from '../../assets/data/missiontypes.json';
export interface State {
  lanzamientos: any[];
}

export const initialState: State = {
  lanzamientos: []
};

export function reducer(state = initialState, action: LanzamientoActions): State {
  switch (action.type) {
    case LanzamientoActionTypes.PorAgencias:
   state.lanzamientos = [];
    if ( action.payload.length !== 0 ) {
      agenciasJS.agencies.forEach( (agen: any) => {
        if ( agen.name.toLowerCase().includes(action.payload) ) {
          lanzamientosJS.launches.forEach( (lanza: any) => {
          lanza.missions.forEach( (misi) => {
            if ( misi.agencies !== null ) {
              misi.agencies.forEach ( (agenlan: any) => {
                if ( agenlan.name === agen.name ) {
                 state.lanzamientos.push(lanza);
                  }
                });
              }
            });
          });
        }
      });
    }
    return { ...state };
    case LanzamientoActionTypes.PorEstados:
    state.lanzamientos = [];
    if ( action.payload.length !== 0 ) {
      lanzamientosJS.launches.forEach( (lanza: any)  => {
        estadosJS.types.forEach( (esta: any) => {
          if ( esta.name.toLowerCase().includes(action.payload) || esta.description.toLowerCase().includes(action.payload)  ) {
            if (esta.id === lanza.status) {
            //  this.contador.contenido ++;
              state.lanzamientos.push( lanza);
            }
          }
        });
       });
    }
    return { ...state };
    case LanzamientoActionTypes.PorTipos:
    state.lanzamientos = [];
    if ( action.payload.length !== 0 ) {
      tiposJS.types.forEach( (tipo: any) => {
        if ( tipo.name.toLowerCase().includes(action.payload) ) {
          lanzamientosJS.launches.forEach( (lanza: any) => {
            lanza.missions.forEach( (misi) => {
              if ( tipo.id === misi.type ) {
              //  this.contador.contenido ++;
                state.lanzamientos.push(lanza );
              }
            });
          });
        }
      });
    }
    return { ...state };
    default:
      return state;
  }
}
