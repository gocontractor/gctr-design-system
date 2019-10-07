import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalDocumentationComponent } from './modal.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ModalDocumentationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalRoutingModule { }
