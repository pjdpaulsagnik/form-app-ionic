import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormInputDataPage } from './form-input-data.page';

const routes: Routes = [
  {
    path: '',
    component: FormInputDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormInputDataPageRoutingModule {}
