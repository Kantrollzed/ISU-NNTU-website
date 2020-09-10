import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlingOneComponent } from './gling-one.component';

describe('GlingOneComponent', () => {
  let component: GlingOneComponent;
  let fixture: ComponentFixture<GlingOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlingOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
