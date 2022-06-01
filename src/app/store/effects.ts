import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError, tap, exhaustMap, takeUntil } from 'rxjs/operators';
import { CoffeeService } from 'src/app/services/coffee.service';
import { fromRoot } from '.';
import { Coffee } from '../model/coffee.model';
import { ApiError, ApiGetMockData, ApiSuccess } from './actions';

@Injectable()
export class RootEffects {

  /**
   * Effect to fetch List of coffees
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

  /**
   * To Unsubsribe
   */
  ngrxOnRunEffects(
    resolvedEffects$: Observable<Coffee[]>
  ): Observable<Coffee[]> {
    return this.actions$.pipe(
      ofType(fromRoot.CoffeePageInit),
      exhaustMap(() =>
        resolvedEffects$.pipe(
          takeUntil(
            this.actions$.pipe(ofType(fromRoot.CoffeePageDestroyed))
          )
        )
      )
    );
  }


  constructor(
    private actions$: Actions,
    private coffeeService: CoffeeService
  ) { }
}
