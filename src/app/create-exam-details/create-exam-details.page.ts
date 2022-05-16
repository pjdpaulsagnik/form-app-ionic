import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ModalController, NavParams } from '@ionic/angular';
import { examdetails } from '../models/exam-model';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-create-exam-details',
  templateUrl: './create-exam-details.page.html',
  styleUrls: ['./create-exam-details.page.scss'],
})
export class CreateExamDetailsPage implements OnInit {

  constructor(private toastService: ToastService,
    private modalController: ModalController,
    public alertController: AlertController,) { }

  ngOnInit() {
  }

  subjectname : string;
  subjectcode : string;
  fullmarks : string;
  cutoffmarks : string; 

  async closeModal() {

    // const obj = 
    await this.presentAlert();

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
            console.log("SELECTED SUBJECT NAME",this.subjectname);
            console.log("SELECTED SUBJECT CODE",this.subjectcode);
            console.log("FULL MARKS", this.fullmarks);
            console.log("CUTOFF MARKS", this.cutoffmarks);

            const userdata: examdetails ={
                exmd_subject_name : this.subjectname,
                exmd_subject_code : this.subjectcode,
                exmd_full_marks : this.fullmarks,
                exmd_cutoff_marks : this.cutoffmarks
            };
            
            // this.data.push(JSON.stringify({
            //   list: "Price",
            //   data: this.selectPrice
            // }));

            // this.data.push(this.selectPrice);
            // this.setObject();
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

}
