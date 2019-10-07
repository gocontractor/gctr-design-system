import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTooltipModule } from '@angular/material/tooltip';
import { GctrIconModule } from '../icon/icon.module';
import { ActionButtonComponent } from './action-button.component';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    GctrIconModule
  ],
  declarations: [ActionButtonComponent],
  exports: [ActionButtonComponent]
})
export class GctrActionButtonModule { }
