import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamDetailsByIdPageRoutingModule } from './exam-details-by-id-routing.module';

import { ExamDetailsByIdPage } from './exam-details-by-id.page';

import { SingleExamRecordObjectComponent } from '../single-exam-record-object/single-exam-record-object.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamDetailsByIdPageRoutingModule
  ],
  declarations: [ExamDetailsByIdPage,SingleExamRecordObjectComponent]
})
export class ExamDetailsByIdPageModule {}
