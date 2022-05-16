import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateExamDetailsPage } from './create-exam-details.page';

const routes: Routes = [
  {
    path: '',
    component: CreateExamDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateExamDetailsPageRoutingModule {}
