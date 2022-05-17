
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class ToastService{

  constructor(private toastController: ToastController){}
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 4000
    });
    toast.present();
  }

  async presentResponseToast() {
    const toast = await this.toastController.create({
      message: 'Data Submitted Successfully',
      duration: 1000
    });
    toast.present();
  }

  async presentErrorToast(obj) {
    const toast = await this.toastController.create({
      message: obj.message,
      duration: 1000
    });
    toast.present();
  }
}