import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamDetailsByIdPage } from './exam-details-by-id.page';

describe('ExamDetailsByIdPage', () => {
  let component: ExamDetailsByIdPage;
  let fixture: ComponentFixture<ExamDetailsByIdPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamDetailsByIdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamDetailsByIdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
