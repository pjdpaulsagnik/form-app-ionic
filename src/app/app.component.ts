import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController) {}

  public appPages = [
    { title: 'Exam Form', url: '/exam-form', icon: 'mail' },
    { title: 'Search Exam', url: '/search-exam', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: 'archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];


}
