import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormOutputDataPage } from './form-output-data.page';

const routes: Routes = [
  {
    path: '',
    component: FormOutputDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormOutputDataPageRoutingModule {}
