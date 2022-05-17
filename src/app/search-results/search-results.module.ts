import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchResultsPageRoutingModule } from './search-results-routing.module';

import { SearchResultsPage } from './search-results.page';

import { ExamSearchedObjectComponent } from '../exam-searched-object/exam-searched-object.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchResultsPageRoutingModule
  ],
  declarations: [SearchResultsPage,ExamSearchedObjectComponent]
})
export class SearchResultsPageModule {}
