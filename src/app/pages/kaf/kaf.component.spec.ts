import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KafComponent } from './kaf.component';

describe('KafComponent', () => {
  let component: KafComponent;
  let fixture: ComponentFixture<KafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
