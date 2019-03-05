import { Action } from '@ngrx/store';
import { LanzamientoActions, LanzamientoActionTypes } from './lanzamiento.actions';
import lanzamientosJS from '../../assets/data/launches.json';
import estadosJS from '../../assets/data/launchstatus.json';
import agenciasJS from '../../assets/data/agencies.json';
import tiposJS from '../../assets/data/missiontypes.json';

export interface State {
  lanzamientos: Array<any>;
  cantidad: number;
  _id?: string;
  message?: string;
}

export const initialState: State = {
  lanzamientos: [],
  cantidad: 0,
  _id: '',
  message: ''
};

export function reducer(state = initialState, action: LanzamientoActions): State {
  state.lanzamientos = [];
  state.cantidad = 0;
  switch (action.type) {
    case LanzamientoActionTypes.PorAgencias:
    if ( action.payload.length !== 0 ) {
      agenciasJS.agencies.forEach( (agen: any) => {
        if ( agen.name.toLowerCase().includes(action.payload) ) {
          lanzamientosJS.launches.forEach( (lanza: any) => {
          lanza.missions.forEach( (misi) => {
            if ( misi.agencies !== null ) {
              misi.agencies.forEach ( (agenlan: any) => {
                if ( agenlan.name === agen.name ) {
                 state.lanzamientos.push(lanza);
                   state.cantidad ++;
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
    if ( action.payload.length !== 0 ) {
      lanzamientosJS.launches.forEach( (lanza: any)  => {
        estadosJS.types.forEach( (esta: any) => {
          if ( esta.name.toLowerCase().includes(action.payload) || esta.description.toLowerCase().includes(action.payload)  ) {
            if (esta.id === lanza.status) {
              state.lanzamientos.push( lanza);
                state.cantidad ++;
            }
          }
        });
       });
    }
    return { ...state };

    case LanzamientoActionTypes.PorTipos:
    if ( action.payload.length !== 0 ) {
      tiposJS.types.forEach( (tipo: any) => {
        if ( tipo.name.toLowerCase().includes(action.payload) ) {
          lanzamientosJS.launches.forEach( (lanza: any) => {
            lanza.missions.forEach( (misi) => {
              if ( tipo.id === misi.type ) {
                state.cantidad ++;
                state.lanzamientos.push(lanza );
              }
            });
          });
        }
      });
    }
      return { ...state };
    case LanzamientoActionTypes.Graba:
      return state;
    case LanzamientoActionTypes.Grabado:
      return action.payload;
    case LanzamientoActionTypes.NoGrabado:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}
