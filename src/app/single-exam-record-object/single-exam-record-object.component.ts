import { Component, Input, OnInit } from '@angular/core';
import { SingleObjectExamDetails } from '../models/exam-model';

@Component({
  selector: 'app-single-exam-record-object',
  templateUrl: './single-exam-record-object.component.html',
  styleUrls: ['./single-exam-record-object.component.scss'],
})
export class SingleExamRecordObjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input('searchedObject') searchedObject : SingleObjectExamDetails;

}
