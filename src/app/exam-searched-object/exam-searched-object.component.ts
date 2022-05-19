import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { searchModel } from '../models/search-model';
import { ApiService } from '../services/apicalls.service';
import { ToastService } from '../services/toast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-exam-searched-object',
  templateUrl: './exam-searched-object.component.html',
  styleUrls: ['./exam-searched-object.component.scss'],
})
export class ExamSearchedObjectComponent implements OnInit, OnChanges, OnDestroy {

  @Input('searchedObject') searchedObject : searchModel;

  subscribeexamsearch : Subscription;

  constructor( private router : Router, private apiService : ApiService, private alertController : AlertController, private toastService : ToastService, ) { }

  ngOnInit() {
    console.log("Searched Object : ",this.searchedObject);
  }
  

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Inside On changes :",this.searchedObject)
  }

  ngOnDestroy(): void {
    console.log(" subscribe : ",this.subscribeexamsearch);
    this.subscribeexamsearch?.unsubscribe();
  }


  getDetailsExam()
  {
    console.log("EXAM-ID = ",this.searchedObject.exm_id);
    this.router.navigateByUrl("/exam-details-by-id",{state : this.searchedObject});
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Are you sure you want to delete this data',
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
            
            this.subscribeexamsearch = this.apiService.deleteExamByusingId(this.searchedObject.exm_id).subscribe( response => {
              if( response.type == 4 )
              {
                this.router.navigateByUrl("/search-exam");
              }
            }, error => {
                console.log("ERROR : ",error);
            })

            const onClosedData: string = "Wrapped Up!";
            this.toastService.presentToast();
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  // deleteExambyId()
  // {
  //    this.apiService.deleteExamByusingId(this.searchedObject.exm_id).subscribe( response => {
  //       if( response.type == 4 )
  //       {
  //         this.router.navigateByUrl("/search-exam");
  //       }
  //    }, error => {
  //       console.log("ERROR : ",error);
  //    })
  // }

  editDetails(){
    this.apiService.editExamData = this.searchedObject;
    this.router.navigateByUrl('/edit-exam-form');
  }

}
