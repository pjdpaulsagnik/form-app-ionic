import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchExam } from '../models/exam-model';
import { searchModel } from '../models/search-model';
import { ApiService } from '../services/apicalls.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['./search-results.page.scss'],
})
export class SearchResultsPage implements OnInit, OnDestroy {

  constructor(public examService : ApiService, private toastService : ToastService) { }

  public obj : searchModel[] = [] ;

  searchExam : Subscription;

  ngOnInit() {

    this.searchExam = this.examService.searchExam(this.examService.objectToBeSearched).subscribe( response => 
      {
        // console.log("Response : ",response)
        if(response.type==4 && response.body.NoOfRecord != "0")
        {
          console.log("SEARCH RESPONSE : ",response);
          // console.log("This is the Response from API = ",response.type);
          console.log("This is the Response from API = ",response.body.Ds.Table)
          this.examService.searchedData = response.body.Ds.Table;
          this.obj = this.examService.searchedData;
          this.toastService.presentDataFoundToast();
        }
        else if( response.type==4 && response.body.NoOfRecord == "0")
        {
          this.toastService.presentAlert();
        }
      }, error => {
        console.log("This is the Error Response from API = ",error);
        this.toastService.presentErrorToast(error.Msg);
      })
    

    console.log("Object passed through params : ",this.obj);

  }

  ngOnDestroy(): void {
    this.searchExam.unsubscribe();
  }

  ionViewWillEnter()
  {

  }
}
