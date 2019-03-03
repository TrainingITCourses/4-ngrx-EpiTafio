import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLanzamiento from './lanzamiento.reducer';

export interface State {

  lanzamiento: fromLanzamiento.State;
}

export const reducers: ActionReducerMap<State> = {

  lanzamiento: fromLanzamiento.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
