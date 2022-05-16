import { Component, OnInit } from '@angular/core';
import { examdataall, examdetails, exammodel } from '../models/exam-model';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CreateExamDetailsPage } from '../create-exam-details/create-exam-details.page';
import { Time } from '@angular/common';
import { ApiService } from '../services/apicalls.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.page.html',
  styleUrls: ['./exam-form.page.scss'],
})
export class ExamFormPage implements OnInit {

  constructor(public toastController: ToastController,public modalController: ModalController, private examRegService : ApiService, private toastService : ToastService) { }

  ngOnInit() {
  }

  examModel = new exammodel();
  
  datetime: any;

  dataReturned: examdetails;

  totaldataexam : examdetails[]=[];

  examdate : string;

  examtime : string;

  datetimecheck()
  {
    console.log(this.examModel.examdatetime);
    this.examdate = format(parseISO(this.examModel.examdatetime), 'yyyy-MM-dd');
    console.log(this.examdate);
    this.examtime = format(parseISO(this.examModel.examdatetime), 'HH-mm');
    console.log(this.examtime);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: CreateExamDetailsPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });

    modal.present();

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        this.totaldataexam.push(this.dataReturned);
        console.log("Array of Exam Details", this.totaldataexam);
        //alert('Modal Sent Data :'+ dataReturned);
        // console.log("Returned Data",this.dataReturned);
      }
    });
  }

  formatDate(value: string) {
    this.examdate = format(parseISO(value), 'yyyy-MM-dd');
    return this.examdate;
  }

  formatTime(value: string) {
    this.examtime = format(parseISO(value), 'HH-mm');
    return this.examtime;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }



  async onSubmit()
  {
      const obj : examdataall = {
        exm_name : this.examModel.examname,
        exm_date : this.examdate,
        exm_time :this.examtime,
        exm_id : "0",
        exm_doc : "",
        Exam_Dtl : this.totaldataexam
      }

      await this.examRegService.registerApiFunction(obj).subscribe( response => 
        {
          if(response.type==4)
          {
            console.log("This is the Response from API = ",response.type);
            this.toastService.presentResponseToast();
          }
        }, error => {
          console.log("This is the Error Response from API = ",error);
        })

  }

}
