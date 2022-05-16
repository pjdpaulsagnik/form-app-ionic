import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchExamPage } from './search-exam.page';

const routes: Routes = [
  {
    path: '',
    component: SearchExamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchExamPageRoutingModule {}
