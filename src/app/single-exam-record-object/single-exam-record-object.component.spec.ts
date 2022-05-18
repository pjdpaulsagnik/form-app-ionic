import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleExamRecordObjectComponent } from './single-exam-record-object.component';

describe('SingleExamRecordObjectComponent', () => {
  let component: SingleExamRecordObjectComponent;
  let fixture: ComponentFixture<SingleExamRecordObjectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleExamRecordObjectComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleExamRecordObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
