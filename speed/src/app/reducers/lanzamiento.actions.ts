import { Action } from '@ngrx/store';

export enum LanzamientoActionTypes {
  PorEstados = '[Lanzamiento] PorEstados',
  PorAgencias = '[Lanzamiento] PorAgencias',
  PorTipos = '[Lanzamiento] PorTipos',
  Graba = '[Lanzamiento] Graba',
  Grabado = '[Lanzamiento] Grabado',
  NoGrabado = '[Lanzamiento] NoGrabado'
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
export class Graba implements Action {
  readonly type = LanzamientoActionTypes.Graba;
  constructor(readonly payload: any) {}
}
export class Grabado implements Action {
  readonly type = LanzamientoActionTypes.Grabado;
  constructor(readonly payload: any) {}
}
export class NoGrabado implements Action {
  readonly type = LanzamientoActionTypes.NoGrabado;
  constructor(readonly payload: any) {}
}
export type LanzamientoActions = PorAgencias | PorTipos | PorEstados | Graba | Grabado | NoGrabado;
