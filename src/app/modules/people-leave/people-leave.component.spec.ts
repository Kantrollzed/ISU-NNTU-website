import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleLeaveComponent } from './people-leave.component';

describe('PeopleLeaveComponent', () => {
  let component: PeopleLeaveComponent;
  let fixture: ComponentFixture<PeopleLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
