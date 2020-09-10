import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KafPComponent } from './kaf-p.component';

describe('KafPComponent', () => {
  let component: KafPComponent;
  let fixture: ComponentFixture<KafPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KafPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KafPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
