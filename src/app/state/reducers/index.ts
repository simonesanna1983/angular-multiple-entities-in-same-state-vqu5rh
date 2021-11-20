import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromExample from './example.reducer';

export interface AppState {
  example: fromExample.State;
}

export const reducers: ActionReducerMap<AppState> = {  
  example: fromExample.reducer
};

// Example selectors
export const selectExampleModule = createFeatureSelector<fromExample.State>('example');

export const selectCarState = createSelector(selectExampleModule, fromExample.selectCarState);
export const selectPlaceState = createSelector(selectExampleModule, fromExample.selectPlaceState);

export const selectAllCars = createSelector(selectCarState, fromExample.selectAllCars);
export const selectAllPlaces = createSelector(selectPlaceState, fromExample.selectAllPlaces);


