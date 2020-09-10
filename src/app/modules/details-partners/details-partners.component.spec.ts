import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPartnersComponent } from './details-partners.component';

describe('DetailsPartnersComponent', () => {
  let component: DetailsPartnersComponent;
  let fixture: ComponentFixture<DetailsPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
