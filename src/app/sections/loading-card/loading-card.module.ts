import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingCardRoutingModule } from './loading-card-routing.module';
import { SharedModule } from 'src/app/shared/shared.modules';
import { LoadingCardDocumentationComponent } from './loading-card.component';
import { GctrLoadingCardModule } from 'projects/gctr-design-system/src/public_api';

@NgModule({
  declarations: [LoadingCardDocumentationComponent],
  imports: [
    CommonModule,
    GctrLoadingCardModule,
    LoadingCardRoutingModule,
    SharedModule
  ]
})
export class LoadingCardModule { }
