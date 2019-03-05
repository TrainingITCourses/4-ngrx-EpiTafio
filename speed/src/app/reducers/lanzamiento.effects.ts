import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { LanzamientoActionTypes, Graba, Grabado, NoGrabado } from './lanzamiento.actions';
import { ApiService } from '../api.service';

@Injectable()
export class LanzamientoEffects {

  @Effect()
  public graba$ = this.actions$.pipe(ofType(LanzamientoActionTypes.Graba), mergeMap((action: Graba) =>
        this.api.postLanzamiento$(action.payload).pipe(
      map (lanzamiento => new Grabado(lanzamiento)),
       catchError (err => of(new NoGrabado(err.message)))))
    );

  constructor(private actions$: Actions, private api: ApiService) {
    this.graba$.subscribe();
  }

}
