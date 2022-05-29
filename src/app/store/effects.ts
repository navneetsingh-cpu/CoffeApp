import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { CoffeeService } from 'src/app/services/coffee.service';
import { ApiError, ApiGetMockData, ApiSuccess } from './actions';

@Injectable()
export class RootEffects {

  /*
  To handle the behaviour of the Effect when different Action instances
  occurs on the same effect you can change mergeMap to other operators
  */

  getMockDataEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(ApiGetMockData),
      tap(() => { console.log('new getMockDataEffect occurred in queue') }),
      mergeMap((action) => {
        console.log('new getMockDataEffect running')
        return this.coffeeService.getCoffeeList$(50).pipe(
          map(res => ApiSuccess({ data: res })),
          catchError(error => of(ApiError({ error }))),
          tap(() => { console.log('getMockDataEffect Finished') })
        )
      }
      )
    )
  )

  constructor(
    private actions$: Actions,
    private coffeeService: CoffeeService
  ) { }
}
