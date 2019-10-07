import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [CommonModule, MatTooltipModule],
  declarations: [IconComponent],
  exports: [IconComponent]
})
export class GctrIconModule {}
