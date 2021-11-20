import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState, selectAllCars, selectAllPlaces } from './state/reducers';
import { GetCarList, GetPlaceList } from './state/actions/example.action';
import { Car } from './state/models/car.model';
import { Place } from './state/models/place.model';

import { cars, places } from './data-to-test';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';

  public carList$: Observable<Car[]>;
  public placeList$: Observable<Place[]>;

  constructor(public store: Store<AppState>) {
    this.carList$ = store.pipe(select(selectAllCars));
    this.placeList$ = store.pipe(select(selectAllPlaces));
  }
  
  public ngOnInit() {
    this.store.dispatch(new GetCarList(cars));
    this.store.dispatch(new GetPlaceList(places));
  }


}
