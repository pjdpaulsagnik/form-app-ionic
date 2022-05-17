import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamDetailsByIdPage } from './exam-details-by-id.page';

const routes: Routes = [
  {
    path: '',
    component: ExamDetailsByIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamDetailsByIdPageRoutingModule {}
