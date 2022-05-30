import { NgModule } from '@angular/core'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  imports: [
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatListModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
