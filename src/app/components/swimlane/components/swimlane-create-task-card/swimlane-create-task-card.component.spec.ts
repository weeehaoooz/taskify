import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimlaneCreateTaskCardComponent } from './swimlane-create-task-card.component';

describe('SwimlaneCreateTaskCardComponent', () => {
  let component: SwimlaneCreateTaskCardComponent;
  let fixture: ComponentFixture<SwimlaneCreateTaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwimlaneCreateTaskCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwimlaneCreateTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
