import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonDatetime, ModalController } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { examdetails, exammodel, SearchExam } from '../models/exam-model';
import { searchModel } from '../models/search-model';
import { ApiService } from '../services/apicalls.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-search-exam',
  templateUrl: './search-exam.page.html',
  styleUrls: ['./search-exam.page.scss'],
})
export class SearchExamPage implements OnInit {

  constructor(public modalController: ModalController, private examService : ApiService, private toastService : ToastService, private router : Router) { }

  ngOnInit() {
  }

  searchExamModel = new SearchExam();
  
  datetime: any;

  dataReturned: examdetails;

  examdatefrom : string;

  examtimeto : string;

  formatDateFrom(value: string) {
    this.examdatefrom = format(parseISO(value), 'yyyy-MM-dd');
    return this.examdatefrom;
  }

  formatDateTo(value: string) {
    this.examtimeto = format(parseISO(value), 'yyyy-MM-dd');
    return this.examtimeto;
  }

  async onSubmit()
  {
    const obj : SearchExam = {
      keyword : this.searchExamModel.keyword,
      fromdate : this.examdatefrom,
      todate : this.examtimeto
    }

    this.examService.objectToBeSearched = obj;

    this.router.navigateByUrl('/search-results', {state : obj});
    
    // await this.examService.searchExam(obj).subscribe( response => 
    //   {
    //     // console.log("Response : ",response)
    //     if(response.type==4 && response.body.NoOfRecord != "0")
    //     {
    //       console.log("SEARCH RESPONSE : ",response);
    //       // console.log("This is the Response from API = ",response.type);
    //       console.log("This is the Response from API = ",response.body.Ds.Table)
    //       this.examService.searchedData = response.body.Ds.Table;
    //       this.router.navigateByUrl('/search-results',{state : response.body.Ds.Table})
    //       this.toastService.presentDataFoundToast();
    //     }
    //     else if( response.type==4 && response.body.NoOfRecord == "0")
    //     {
    //       this.toastService.presentAlert();
    //     }
    //   }, error => {
    //     console.log("This is the Error Response from API = ",error);
    //     this.toastService.presentErrorToast(error.Msg);
    //   })

  }

}
