import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GctrCardModule } from '../card/card.module';
import { GctrProgressBarModule } from '../progress-bar/progress-bar.module';

import { LoadingCardComponent } from './loading-card.component';

@NgModule({
  imports: [CommonModule, GctrCardModule, GctrProgressBarModule],
  declarations: [LoadingCardComponent],
  exports: [LoadingCardComponent]
})
export class GctrLoadingCardModule { }
