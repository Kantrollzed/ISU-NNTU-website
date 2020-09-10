import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefullinfComponent } from './usefullinf.component';

describe('UsefullinfComponent', () => {
  let component: UsefullinfComponent;
  let fixture: ComponentFixture<UsefullinfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsefullinfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsefullinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
