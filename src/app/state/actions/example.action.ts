import { Action } from '@ngrx/store';

import { Car } from '../models/car.model';
import { Place } from '../models/place.model';

export enum ExampleActionTypes {
  GetCarList = '[Car API] Get Car List',
  GetPlaceList = '[Place API] Get Place List'
}

export class GetCarList implements Action {
  public readonly type = ExampleActionTypes.GetCarList;

  constructor(public payload: Car[]) {}
}

export class GetPlaceList implements Action {
  public readonly type = ExampleActionTypes.GetPlaceList;

  constructor(public payload: Place[]) {}
}

export type ExampleActions =  
  | GetCarList
  | GetPlaceList;
