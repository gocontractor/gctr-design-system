import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GctrDataTableComponent } from './data-table/data-table.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
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
