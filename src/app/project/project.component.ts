import { TitleCasePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ProjectsService } from '../services/projects.service';
import { ITaskStatusEnum } from '../components/task-card/task.interface';

@Component({
  selector: 'tsk-project',
  imports: [
    MatIconModule,
    RouterOutlet,
    TitleCasePipe
],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  private readonly projectService = inject(ProjectsService);
  private readonly route = inject(ActivatedRoute); 
  private readonly router = inject(Router);

  project = this.projectService.currentProject;
  projectId = this.route.snapshot.paramMap.get('id') ?? null;

  completionPercentage = computed(() => {
    const tasks = this.project()?.tasks ?? [];
    if (tasks.length === 0) return 0;
    const done = tasks.filter(t => t.status === ITaskStatusEnum.DONE).length;
    return Math.round((done / tasks.length) * 100);
  });

  ngOnInit() {
    if(this.projectService.hasProject(this.projectId ?? '')) {
      this.projectService.setCurrentProject(this.projectId ?? '');
    } else {
      this.router.navigate(['/page-not-found']);
    }
  }
  
  
}
