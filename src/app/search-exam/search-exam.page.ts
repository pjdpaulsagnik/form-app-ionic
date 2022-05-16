import { Component, OnInit } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';

@Component({
  selector: 'app-search-exam',
  templateUrl: './search-exam.page.html',
  styleUrls: ['./search-exam.page.scss'],
})
export class SearchExamPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }

}
