import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormInputDataPageRoutingModule } from './form-input-data-routing.module';

import { FormInputDataPage } from './form-input-data.page';

import { MyModalPageModule } from '../my-modal/my-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormInputDataPageRoutingModule,
    MyModalPageModule
  ],
  declarations: [FormInputDataPage]
})
export class FormInputDataPageModule {}
