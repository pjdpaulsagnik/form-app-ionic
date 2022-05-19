import { Component, OnInit } from '@angular/core';
import { exammodel, examModelInstance } from '../models/exam-model';
import { searchModel, examSearchModelInstance } from '../models/search-model';
import { ApiService } from '../services/apicalls.service';
import { format, parseISO } from 'date-fns';


@Component({
  selector: 'app-edit-exam-form',
  templateUrl: './edit-exam-form.page.html',
  styleUrls: ['./edit-exam-form.page.scss'],
})
export class EditExamFormPage implements OnInit {

  examModel : searchModel = examSearchModelInstance;
  examName : string = "";
  dateValue : string = "";
  timeValue : string = "";

  examdate : string;

  examtime : string;

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.examModel.exm_name = this.apiService.editExamData.exm_name;
    this.examModel.exm_date = this.apiService.editExamData.exm_date;
    this.examModel.exm_time = this.apiService.editExamData.exm_time;
    this.dateValue = this.apiService.editExamData.exm_date;
    this.timeValue = this.apiService.editExamData.exm_time;
  }

  formatDate(value: string) {
    this.examdate = format(parseISO(value), 'yyyy-MM-dd');
    return this.examdate;
  }

  formatTime(value: string) {
    this.examtime = format(parseISO(value), 'HH-mm');
    return this.examtime;
  }

}
