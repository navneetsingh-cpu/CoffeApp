import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FooterComponent } from './components/footer/footer.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fromRoot } from './store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

import { CardComponent } from './components/card/card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpRequestInterceptor } from './http-request-interceptor';
import { DetailDialogComponent } from './components/detail-dialog/detail-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CardComponent,
    DetailDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      rootState: fromRoot.rootReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([fromRoot.RootEffects]),
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatListModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
