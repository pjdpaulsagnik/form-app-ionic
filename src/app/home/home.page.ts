import { Component , ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../my-modal/my-modal.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('registerForm', {static:false}) regForm: NgForm;

  userModal = new User();

  dataReturned: any;

  constructor(public modalController: ModalController) {}
  
  onSubmit(){
    console.log(this.regForm.value);

    if(this.regForm.value.password !== this.regForm.value.confirmPassword){
      console.log("pass doesnt match");
      //throw an error if doesnt match
      //as of now just returning and dropping the api call.
    }
    // api call to post the request.

    const obj: User = {
      name: this.regForm.value.name,
      username: this.regForm.value.username,
      email: this.regForm.value.email, 
      password: this.regForm.value.password,
      confirmPassword: this.regForm.value.confirmPassword
    };

    localStorage.setItem("object",JSON.stringify(obj));

    console.log(obj);

    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    console.table(this.userModal);
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
      }
    });
  }

}
