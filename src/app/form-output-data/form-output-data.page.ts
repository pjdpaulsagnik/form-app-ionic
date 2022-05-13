import { Component, OnInit } from '@angular/core';
import { UserTotalModel } from '../models/user-all-data';

@Component({
  selector: 'app-form-output-data',
  templateUrl: './form-output-data.page.html',
  styleUrls: ['./form-output-data.page.scss'],
})
export class FormOutputDataPage implements OnInit {

  constructor() { }

  obj : UserTotalModel;

  ngOnInit() {

    // console.log(history.state);

    this.obj = history.state;

    console.log("Object passed through params : ",this.obj);
  }

}
