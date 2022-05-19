import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditExamFormPageRoutingModule } from './edit-exam-form-routing.module';

import { EditExamFormPage } from './edit-exam-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditExamFormPageRoutingModule
  ],
  declarations: [EditExamFormPage]
})
export class EditExamFormPageModule {}
