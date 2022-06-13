import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuscleGroupExercisesComponent } from './muscle-group-exercises/muscle-group-exercises.component';
import { MuscleGroupsComponent } from './muscle-groups/muscle-groups.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LiftDetailsComponent } from './lift-details/lift-details.component';
import { LiftLogComponent } from './lift-log/lift-log.component';

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
    children: [
      {
        path: '',
        redirectTo: 'Form',
        pathMatch: 'full'
      },
      {
        path: 'Form',
        component: LiftDetailsComponent,
      },
      {
        path: 'Log',
        component: LiftLogComponent,
      },
    ]
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
