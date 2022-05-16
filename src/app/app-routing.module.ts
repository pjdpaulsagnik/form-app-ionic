import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-modal',
    loadChildren: () => import('./my-modal/my-modal.module').then( m => m.MyModalPageModule)
  },
  {
    path: 'form-input-data',
    loadChildren: () => import('./form-input-data/form-input-data.module').then( m => m.FormInputDataPageModule)
  },
  {
    path: 'form-output-data',
    loadChildren: () => import('./form-output-data/form-output-data.module').then( m => m.FormOutputDataPageModule)
  },
  {
    path: 'exam-form',
    loadChildren: () => import('./exam-form/exam-form.module').then( m => m.ExamFormPageModule)
  },
  {
    path: 'create-exam-details',
    loadChildren: () => import('./create-exam-details/create-exam-details.module').then( m => m.CreateExamDetailsPageModule)
  },
  {
    path: 'search-exam',
    loadChildren: () => import('./search-exam/search-exam.module').then( m => m.SearchExamPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
