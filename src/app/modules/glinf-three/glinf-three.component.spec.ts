import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlinfThreeComponent } from './glinf-three.component';

describe('GlinfThreeComponent', () => {
  let component: GlinfThreeComponent;
  let fixture: ComponentFixture<GlinfThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlinfThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlinfThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
