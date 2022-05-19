import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditExamFormPage } from './edit-exam-form.page';

const routes: Routes = [
  {
    path: '',
    component: EditExamFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditExamFormPageRoutingModule {}
