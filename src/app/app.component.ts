import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { delay, Observable, Subject, takeUntil } from 'rxjs';
import { DetailDialogComponent } from './components/detail-dialog/detail-dialog.component';
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

  private ngUnsubscribe = new Subject<void>();

  @ViewChild('paginator') paginator: MatPaginator;

  constructor(private store: Store<{ rootState: RootState }>,
    private _loading: LoadingService,
    private dialog: MatDialog,
  ) {
    this.error$ = this.store.select(fromRoot.getStateError);
    this.data$ = this.store.select(fromRoot.getStateSelectedData);
  }


  ngOnInit(): void {
    this.listenToLoading();

    this.store.dispatch(fromRoot.CoffeePageInit());
    this.store.dispatch(fromRoot.ApiGetMockData());
    this.data$.pipe(takeUntil(this.ngUnsubscribe)
    ).subscribe((data: Coffee[]) => {

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
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
  openCoffeeDetail(coffee: Coffee) {
    this.dialog.open(DetailDialogComponent, {
      data: coffee,
    });
  }
  /**
   * Unsubscribe
   */
  ngOnDestroy() {
    this.store.dispatch(fromRoot.CoffeePageInit());
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
