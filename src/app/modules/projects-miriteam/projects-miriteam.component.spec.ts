import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsMiriteamComponent } from './projects-miriteam.component';

describe('ProjectsMiriteamComponent', () => {
  let component: ProjectsMiriteamComponent;
  let fixture: ComponentFixture<ProjectsMiriteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsMiriteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsMiriteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
