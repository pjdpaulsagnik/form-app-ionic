import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormOutputDataPageRoutingModule } from './form-output-data-routing.module';

import { FormOutputDataPage } from './form-output-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormOutputDataPageRoutingModule
  ],
  declarations: [FormOutputDataPage]
})
export class FormOutputDataPageModule {}
