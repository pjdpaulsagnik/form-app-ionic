import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../my-modal/my-modal.page';
import { ToastController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { Usermodelprice } from '../models/user-modal';

@Component({
  selector: 'app-form-input-data',
  templateUrl: './form-input-data.page.html',
  styleUrls: ['./form-input-data.page.scss'],
})
export class FormInputDataPage implements OnInit {

  constructor(public toastController: ToastController,public modalController: ModalController) { }

  dataReturned: Usermodelprice[];

  user: any[];


  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: MyModalPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });

    modal.present();

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
        console.log("Returned Data",this.dataReturned);
      }
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      icon: 'information-circle',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();

  }

  async getObject() {
    const ret = await Storage.get({ key: 'user' });
    this.user = JSON.parse(ret.value); 
    console.log(this.user);
  }

}
