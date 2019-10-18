import { NgModule } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material';
import { SpinnerComponent } from './spinner.component';

@NgModule({
  imports: [MatProgressSpinnerModule],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent]
})
export class GctrSpinnerModule { }
