import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { searchModel } from '../models/search-model';

@Component({
  selector: 'app-exam-searched-object',
  templateUrl: './exam-searched-object.component.html',
  styleUrls: ['./exam-searched-object.component.scss'],
})
export class ExamSearchedObjectComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit() {}

  @Input('searchedObject') searchedObject : searchModel;


  getDetailsExam()
  {
    console.log("EXAM-ID = ",this.searchedObject.exm_id);
    this.router.navigateByUrl("/exam-details-by-id",{state : this.searchedObject});
  }

}
