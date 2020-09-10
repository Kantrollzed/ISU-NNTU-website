import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupStudentsLessComponent } from './startup-students-less.component';

describe('StartupStudentsLessComponent', () => {
  let component: StartupStudentsLessComponent;
  let fixture: ComponentFixture<StartupStudentsLessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupStudentsLessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupStudentsLessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
