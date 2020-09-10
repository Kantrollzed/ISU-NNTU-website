import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantspComponent } from './grantsp.component';

describe('GrantspComponent', () => {
  let component: GrantspComponent;
  let fixture: ComponentFixture<GrantspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
