import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GctrDataTableComponent } from './data-table/data-table.component';
import {
  MatIconModule,
  MatCheckboxModule,
  MatMenuModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatTableModule,
  MatInputModule
} from '@angular/material';
import { GctrButtonModule } from '../button/button.module';

@NgModule({
  declarations: [GctrDataTableComponent],
  imports: [
    CommonModule,
    GctrButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule
  ],
  exports: [GctrDataTableComponent]
})
export class GctrDataTableModule { }
