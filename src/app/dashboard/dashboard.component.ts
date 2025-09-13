import { Component, computed, inject } from '@angular/core';
import { SwimlaneComponent } from "../components/swimlane/swimlane.component";
import { SwimlanesService } from '../services/swimlanes.service';

@Component({
  selector: 'tsk-dashboard',
  imports: [SwimlaneComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  private readonly swimlaneService = inject(SwimlanesService);
  
  swimlanes = this.swimlaneService.swimlanes;

  connectedIds(swimlaneId: string) {
    return this.swimlanes().map(l => l.id).filter(id => id !== swimlaneId);
  }
}
