import { NgModule } from '@angular/core'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider'
import { MatExpansionModule } from '@angular/material/expansion'

@NgModule({
  imports: [
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatDividerModule,
    MatExpansionModule
  ],
  exports: [
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatDividerModule,
    MatExpansionModule
  ]
})
export class MaterialModule { }
