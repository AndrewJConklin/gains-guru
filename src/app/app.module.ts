import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuscleGroupListingComponent } from './muscle-group-listing/muscle-group-listing.component';
import { MuscleGroupsComponent } from './muscle-groups/muscle-groups.component';
import { MuscleGroupExercisesComponent } from './muscle-group-exercises/muscle-group-exercises.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LiftLogComponent } from './lift-log/lift-log.component';
import { LiftDetailsComponent } from './lift-details/lift-details.component';
import { NavComponent } from './nav/nav.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { MacrosComponent } from './macros/macros.component';

@NgModule({
  declarations: [
    AppComponent,
    MuscleGroupListingComponent,
    MuscleGroupsComponent,
    MuscleGroupExercisesComponent,
    ExerciseDetailsComponent,
    PageNotFoundComponent,
    SpinnerComponent,
    LiftLogComponent,
    LiftDetailsComponent,
    NavComponent,
    NutritionComponent,
    MacrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
