import { Component, OnInit } from '@angular/core';
import { SingleObjectExamDetails } from '../models/exam-model';
import { ApiService } from '../services/apicalls.service';

@Component({
  selector: 'app-exam-details-by-id',
  templateUrl: './exam-details-by-id.page.html',
  styleUrls: ['./exam-details-by-id.page.scss'],
})
export class ExamDetailsByIdPage implements OnInit {

  constructor(private apiService : ApiService) { }

  id : number;

  examRecords : SingleObjectExamDetails[] = [];

  ngOnInit() {
    console.log("Data Recieved From Params : ", history.state);
    this.id = history.state.exm_id;
    console.log("Exam ID = ", this.id);

    this.apiService.searchExamDetails(this.id).subscribe( response => {
      // console.log("Response of Exam Details :",response)
      if( response.type == 4 )
      {
        this.examRecords = response.body.Ds.Table;
        console.log("Exam Records are : ",this.examRecords);
      }
    }, error => {
      console.log("Error =",error);
    })

  }

}
