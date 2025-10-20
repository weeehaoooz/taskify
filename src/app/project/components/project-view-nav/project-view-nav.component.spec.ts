import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectViewNavComponent } from './project-view-nav.component';

describe('ProjectViewNavComponent', () => {
  let component: ProjectViewNavComponent;
  let fixture: ComponentFixture<ProjectViewNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectViewNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectViewNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
