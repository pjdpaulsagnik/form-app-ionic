import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/apicalls.service';

@Component({
  selector: 'app-exam-details-by-id',
  templateUrl: './exam-details-by-id.page.html',
  styleUrls: ['./exam-details-by-id.page.scss'],
})
export class ExamDetailsByIdPage implements OnInit {

  constructor(private apiService : ApiService) { }

  id : number;

  ngOnInit() {
    console.log("Data Recieved From Params : ", history.state);
    this.id = history.state.exm_id;
    console.log("Exam ID = ", this.id);

    this.apiService.searchExamDetails(this.id).subscribe( response => {
      console.log("Response of Exam Details :",response)
    }, error => {
      console.log("Error =",error);
    })

  }

}
