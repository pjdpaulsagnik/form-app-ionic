
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class ToastService{

  constructor(private toastController: ToastController, private alertController : AlertController){}
  
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

  async presentDataFoundToast() {
    const toast = await this.toastController.create({
      message: 'Records found Successfully',
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

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: ' ',
      message: 'No Record Found',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}