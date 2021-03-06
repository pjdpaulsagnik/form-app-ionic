import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamFormPageRoutingModule } from './exam-form-routing.module';

import { ExamFormPage } from './exam-form.page';

import { CreateExamDetailsPage } from '../create-exam-details/create-exam-details.page';
import { HttpClientModule } from '@angular/common/http';
import { SingleExamRecordObjectComponent } from '../single-exam-record-object/single-exam-record-object.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamFormPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ExamFormPage,SingleExamRecordObjectComponent]
})
export class ExamFormPageModule {}
