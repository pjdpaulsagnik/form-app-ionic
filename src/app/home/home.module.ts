import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { HomePageRoutingModule } from './home-routing.module';
import { MyModalPageModule } from '../my-modal/my-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    MyModalPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
