import { Action } from '@ngrx/store';

export enum LanzamientoActionTypes {
  PorEstados = '[Lanzamiento] PorEstados',
  PorAgencias = '[Lanzamiento] PorAgencias',
  PorTipos = '[Lanzamiento] PorTipos',

}

export class PorEstados implements Action {
  readonly type = LanzamientoActionTypes.PorEstados;
  constructor(readonly payload: any) {}
}
export class PorAgencias implements Action {
  readonly type = LanzamientoActionTypes.PorAgencias;
  constructor(readonly payload: any) {}
}
export class PorTipos implements Action {
  readonly type = LanzamientoActionTypes.PorTipos;
  constructor(readonly payload: any) {}
}

export type LanzamientoActions = PorAgencias | PorTipos | PorEstados;
