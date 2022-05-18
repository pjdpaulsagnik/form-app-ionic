import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SingleObjectExamDetails } from '../models/exam-model';

@Component({
  selector: 'app-single-exam-record-object',
  templateUrl: './single-exam-record-object.component.html',
  styleUrls: ['./single-exam-record-object.component.scss'],
})
export class SingleExamRecordObjectComponent implements OnInit, OnChanges {

  @Input('searchedObject') searchedObject : SingleObjectExamDetails;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Changes Made : ",this.searchedObject)
  }


}
