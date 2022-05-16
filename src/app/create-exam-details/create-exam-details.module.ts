import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateExamDetailsPageRoutingModule } from './create-exam-details-routing.module';

import { CreateExamDetailsPage } from './create-exam-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateExamDetailsPageRoutingModule
  ],
  declarations: [CreateExamDetailsPage]
})
export class CreateExamDetailsPageModule {}
