// my-modal.page.ts
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { Output, EventEmitter } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { AlertController } from '@ionic/angular';
import { Usermodelprice } from '../models/user-modal';
// JSON "set" example

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.page.html',
  styleUrls: ['./my-modal.page.scss'],
})
export class MyModalPage implements OnInit {


  modalTitle: string="";
  modelId: number=0;

  selectModel: string="";

  selectPrice: []=[];

  

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private toastService: ToastService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
    console.log(this.selectModel)
  }

  async closeModal() {

    // const obj = 
    await this.presentAlert();

  }

  onChangePrice()
  {
    console.log(this.selectModel)
  }

  onChangeModel()
  {
    console.log(this.selectPrice);
  }

  // async setObject() {
  //   await Storage.set({
  //     key: 'user',
  //     value: JSON.stringify({
  //       id: 1,
  //       dataset: this.userdata
  //     })
  //   });
  // }

  // async setObjectToppings() {
  //   await Storage.set({
  //     key: 'userToppings',
  //     value: JSON.stringify({
  //       id: 1,
  //       name: this.data
  //     })
  //   });
  // }

  // @Output() newItemEvent = new EventEmitter<string>();
  
  // JSON "get" example
  async getObject() {
    const ret = await Storage.get({ key: 'user' });
    const user = JSON.parse(ret.value);
    console.log(user);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Are you sure you want to save this data',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
            console.log("SELECTED MODEL",this.selectModel);
            console.log("SELECTED PRICE",this.selectPrice);

            const userdata: Usermodelprice ={
                model : this.selectModel,
                price : this.selectPrice
            };
            
            // this.data.push(JSON.stringify({
            //   list: "Price",
            //   data: this.selectPrice
            // }));

            // this.data.push(this.selectPrice);
            // this.setObject();
            console.log("COMPLETE DATA OF MODAL :",userdata.model);
            const onClosedData: string = "Wrapped Up!";
            this.modalController.dismiss(userdata);
            this.toastService.presentToast();
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  // async addNewItem() {
  //   this.newItemEvent.emit("HELLO");
  //   await this.modalController.dismiss();
  // }

}
