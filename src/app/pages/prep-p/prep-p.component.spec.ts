import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepPComponent } from './prep-p.component';

describe('PrepPComponent', () => {
  let component: PrepPComponent;
  let fixture: ComponentFixture<PrepPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
