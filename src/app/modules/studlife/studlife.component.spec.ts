import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudlifeComponent } from './studlife.component';

describe('StudlifeComponent', () => {
  let component: StudlifeComponent;
  let fixture: ComponentFixture<StudlifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudlifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
