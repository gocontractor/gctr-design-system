import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GctrIconModule } from '../icon/icon.module';
import { ButtonComponent } from './button.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    GctrIconModule
  ],
  declarations: [ButtonComponent],
  exports: [ButtonComponent]
})
export class GctrButtonModule {}
