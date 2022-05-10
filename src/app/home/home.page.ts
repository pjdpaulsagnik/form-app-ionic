import { Component , ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('registerForm', {static:false}) regForm: NgForm;

  userModal = new User();

  constructor() {}
  
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
}
