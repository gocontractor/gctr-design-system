import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingCardDocumentationComponent } from './loading-card.component';

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: '',
          component: LoadingCardDocumentationComponent
        }
      ]
    }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadingCardRoutingModule { }
