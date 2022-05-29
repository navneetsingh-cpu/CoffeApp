import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { delay, Observable } from 'rxjs';
import { Coffee } from './model/coffee.model';
import { LoadingService } from './services/loading.service';
import { fromRoot } from './store';
import { RootState } from './store/reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  error$: Observable<string>;
  data$: Observable<Coffee[]>;
  coffeeList: Coffee[] = [];
  visibleCoffeeList: Coffee[] = [];
  loading = false;


  @ViewChild('paginator') paginator: MatPaginator;

  constructor(private store: Store<{ rootState: RootState }>,
    private _loading: LoadingService
  ) {
    this.error$ = this.store.select(fromRoot.getStateError);
    this.data$ = this.store.select(fromRoot.getStateSelectedData);
  }


  ngOnInit(): void {
    this.listenToLoading();

    this.store.dispatch(fromRoot.CoffeePageInit());
    this.store.dispatch(fromRoot.ApiGetMockData());
    this.data$.subscribe((data: Coffee[]) => {

      this.coffeeList = this.deepClone(data);
      this.visibleCoffeeList = this.coffeeList?.slice(0, 10);
      this.paginator?.firstPage();
    });
  }

  private deepClone(input: Coffee[]): Coffee[] {
    return JSON.parse(JSON.stringify(input));
  }

  onPageChange($event: PageEvent): void {
    this.visibleCoffeeList = this.coffeeList.slice($event.pageIndex * $event.pageSize,
      $event.pageIndex * $event.pageSize + $event.pageSize);
  }


  /**
   * Listen to the loadingSub property in the LoadingService class. This drives the
   * display of the loading spinner.
   */
  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

  ngOnDestroy() {
    this.store.dispatch(fromRoot.CoffeePageInit());
  }

}
