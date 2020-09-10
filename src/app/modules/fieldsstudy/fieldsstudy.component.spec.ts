import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsstudyComponent } from './fieldsstudy.component';

describe('FieldsstudyComponent', () => {
  let component: FieldsstudyComponent;
  let fixture: ComponentFixture<FieldsstudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsstudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsstudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
