import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlinfTwoComponent } from './glinf-two.component';

describe('GlinfTwoComponent', () => {
  let component: GlinfTwoComponent;
  let fixture: ComponentFixture<GlinfTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlinfTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlinfTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
