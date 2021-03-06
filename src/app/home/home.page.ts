import { Component , ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../my-modal/my-modal.page';
import { Storage } from '@capacitor/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('loginForm', {static:false}) loginForm: NgForm;

  userModal = new User();

  dataReturned: any;

  user: any[];

  constructor(public modalController: ModalController, private router: Router) {}
  
  onSubmit(){
    console.log(this.loginForm.value);

    // if(this.loginForm.value.password !== this.loginForm.value.confirmPassword){
    //   console.log("pass doesnt match");
    //   //throw an error if doesnt match
    //   //as of now just returning and dropping the api call.
    // }
    // api call to post the request.

    const obj: User = {
      email: this.loginForm.value.email, 
      password: this.loginForm.value.password,
    };

    localStorage.setItem("object",JSON.stringify(obj));

    console.log(obj);

    alert('You have just logged in');

    this.router.navigate(['/form-input-data']);

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

  async getObject() {
    const ret = await Storage.get({ key: 'user' });
    this.user = JSON.parse(ret.value); 
    console.log(this.user);
  }

  addItem(newItem: string) {
    console.log("hiiiiiiiiiiiiiiiii",newItem);
    this.user.push(newItem);
  }


}
