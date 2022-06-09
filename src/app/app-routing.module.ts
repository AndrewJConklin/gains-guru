import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuscleGroupExercisesComponent } from './muscle-group-exercises/muscle-group-exercises.component';
import { MuscleGroupsComponent } from './muscle-groups/muscle-groups.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'muscle-groups',
    component: MuscleGroupsComponent,
  },
  {
    path: 'muscle-groups/:name',
    component: MuscleGroupExercisesComponent,
  },
  {
    path: 'muscle-groups/:name/:id',
    component: ExerciseDetailsComponent,
  },
  {
    path: '',
    redirectTo: '/muscle-groups',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
