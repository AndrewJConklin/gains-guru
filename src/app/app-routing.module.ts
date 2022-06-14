import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuscleGroupExercisesComponent } from './muscle-group-exercises/muscle-group-exercises.component';
import { MuscleGroupsComponent } from './muscle-groups/muscle-groups.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LiftDetailsComponent } from './lift-details/lift-details.component';
import { LiftLogComponent } from './lift-log/lift-log.component';
import { NavComponent } from './nav/nav.component';
import { NutritionComponent } from './nutrition/nutrition.component';

const routes: Routes = [
  {
    path: 'home',
    component: NavComponent,
  },
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
    path: 'nutrition',
    component: NutritionComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
