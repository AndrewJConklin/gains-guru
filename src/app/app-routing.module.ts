import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuscleGroupExercisesComponent } from './muscle-group-exercises/muscle-group-exercises.component';
import { MuscleGroupsComponent } from './muscle-groups/muscle-groups.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';

const routes: Routes = [
  {
    path: 'muscle-groups',
    component: MuscleGroupsComponent,
  },
  {
    path: ':name',
    component: MuscleGroupExercisesComponent,
  },
  {
    path: ':name/:id',
    component: ExerciseDetailsComponent,
  },
  {
    path: '',
    redirectTo: '/muscle-groups',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
