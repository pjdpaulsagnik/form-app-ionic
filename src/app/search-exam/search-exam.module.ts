import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchExamPageRoutingModule } from './search-exam-routing.module';

import { SearchExamPage } from './search-exam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchExamPageRoutingModule
  ],
  declarations: [SearchExamPage]
})
export class SearchExamPageModule {}
