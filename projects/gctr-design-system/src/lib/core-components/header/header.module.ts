import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { GctrProgressBarModule } from '../../progress-bar/progress-bar.module';

@NgModule({
  imports: [
    CommonModule,
    GctrProgressBarModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class GctrHeaderModule { }
