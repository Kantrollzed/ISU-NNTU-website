import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpinfComponent } from './impinf.component';

describe('ImpinfComponent', () => {
  let component: ImpinfComponent;
  let fixture: ComponentFixture<ImpinfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpinfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
