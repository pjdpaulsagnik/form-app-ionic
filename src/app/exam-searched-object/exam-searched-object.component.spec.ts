import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamSearchedObjectComponent } from './exam-searched-object.component';

describe('ExamSearchedObjectComponent', () => {
  let component: ExamSearchedObjectComponent;
  let fixture: ComponentFixture<ExamSearchedObjectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamSearchedObjectComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamSearchedObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
