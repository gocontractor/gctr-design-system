import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating.component';
import { GctrIconModule } from '../icon/icon.module';

@NgModule({
  declarations: [RatingComponent],
  imports: [CommonModule, GctrIconModule],
  exports: [RatingComponent]
})
export class GctrRatingModule { }
