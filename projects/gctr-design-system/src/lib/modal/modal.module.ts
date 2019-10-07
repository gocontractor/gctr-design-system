import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GctrIconModule } from '../icon/icon.module';
import { ModalComponent } from './modal.component';

@NgModule({
  imports: [CommonModule, GctrIconModule],
  declarations: [ModalComponent],
  exports: [ModalComponent]
})
export class GctrModalModule { }
