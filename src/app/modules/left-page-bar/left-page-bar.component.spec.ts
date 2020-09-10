import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPageBarComponent } from './left-page-bar.component';

describe('LeftPageBarComponent', () => {
  let component: LeftPageBarComponent;
  let fixture: ComponentFixture<LeftPageBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftPageBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPageBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
