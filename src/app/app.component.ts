import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Coffee } from './model/coffee.model';
import { fromRoot } from './store';
import { RootState } from './store/reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  error$: Observable<string>;
  data$: Observable<Coffee[]>;
  coffeeList: Coffee[];

  constructor(private store: Store<{ rootState: RootState }>) {
    this.error$ = this.store.select(fromRoot.getStateError);
    this.data$ = this.store.select(fromRoot.getStateSelectedData);
  }


  ngOnInit() {
    this.store.dispatch(fromRoot.ApiGetMockData({ id: 'randomId' }));
    this.data$.subscribe((data: Coffee[]) => {

      this.coffeeList = this.deepClone(data);
    });
  }

  private deepClone(input: Coffee[]): Coffee[] {
    return JSON.parse(JSON.stringify(input));
  }


}
