import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Car } from '../models/car.model';
import { Place } from '../models/place.model';

import { ExampleActionTypes, ExampleActions } from '../actions/example.action';

interface CarState extends EntityState<Car> {
  total: number;
}

interface PlaceState extends EntityState<Place> {
  total: number;  
}

export interface State {
  msg: string;
  cars: CarState;
  places: PlaceState;
}

const adapterCar = createEntityAdapter<Car>();
const adapterPlace = createEntityAdapter<Place>();

const carInitialState: CarState = adapterCar.getInitialState({ total: 0 });
const placeInitialState: PlaceState = adapterPlace.getInitialState({ total: 0 });

const initialState = {
  msg: 'Multiple entities in the same state',
  cars: carInitialState,
  places: placeInitialState
}

export function reducer(state: State = initialState, action: ExampleActions): State {
  
  switch (action.type) {
    
    case ExampleActionTypes.GetCarList:
      return { ...state, cars: adapterCar.addMany(action.payload, state.cars) };
    
    case ExampleActionTypes.GetPlaceList:
    const { payload } = action;
      return { 
        ...state, 
        places: adapterPlace.addMany(
            payload, {  ...state.places, total: payload.length }
        )
      };
    
    default:
      return state;
  }

}

export const selectCarState = (state: State) => state.cars;
export const selectPlaceState = (state: State) => state.places;

export const { selectAll: selectAllCars } = adapterCar.getSelectors();
export const { selectAll: selectAllPlaces } = adapterPlace.getSelectors();
