import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersPComponent } from './partners-p.component';

describe('PartnersPComponent', () => {
  let component: PartnersPComponent;
  let fixture: ComponentFixture<PartnersPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
