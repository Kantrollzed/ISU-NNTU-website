import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupStudentsComponent } from './startup-students.component';

describe('StartupStudentsComponent', () => {
  let component: StartupStudentsComponent;
  let fixture: ComponentFixture<StartupStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
