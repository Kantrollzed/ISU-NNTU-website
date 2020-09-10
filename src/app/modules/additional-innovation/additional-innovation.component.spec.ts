import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalInnovationComponent } from './additional-innovation.component';

describe('AdditionalInnovationComponent', () => {
  let component: AdditionalInnovationComponent;
  let fixture: ComponentFixture<AdditionalInnovationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalInnovationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalInnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
