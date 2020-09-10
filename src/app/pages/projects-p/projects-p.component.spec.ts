import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPComponent } from './projects-p.component';

describe('ProjectsPComponent', () => {
  let component: ProjectsPComponent;
  let fixture: ComponentFixture<ProjectsPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
