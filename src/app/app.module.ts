import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuscleGroupListingComponent } from './muscle-group-listing/muscle-group-listing.component';
import { MuscleGroupsComponent } from './muscle-groups/muscle-groups.component';
import { MuscleGroupExercisesComponent } from './muscle-group-exercises/muscle-group-exercises.component';
import { ExerciseDetailsComponent } from './exercise-details/exercise-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    MuscleGroupListingComponent,
    MuscleGroupsComponent,
    MuscleGroupExercisesComponent,
    ExerciseDetailsComponent,
    PageNotFoundComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
