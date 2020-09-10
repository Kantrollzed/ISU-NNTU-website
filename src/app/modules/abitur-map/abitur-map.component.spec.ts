import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbiturMapComponent } from './abitur-map.component';

describe('AbiturMapComponent', () => {
  let component: AbiturMapComponent;
  let fixture: ComponentFixture<AbiturMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbiturMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbiturMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
