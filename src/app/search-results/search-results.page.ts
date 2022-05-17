import { Component, OnInit } from '@angular/core';
import { SearchExam } from '../models/exam-model';
import { searchModel } from '../models/search-model';
import { ApiService } from '../services/apicalls.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['./search-results.page.scss'],
})
export class SearchResultsPage implements OnInit {

  constructor(public examService : ApiService) { }

  public obj : searchModel[] = [] ;

  ngOnInit() {

    this.obj = this.examService.searchedData;

    console.log("Object passed through params : ",this.obj);

  }

}
