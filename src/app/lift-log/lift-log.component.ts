import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { ExerciseDetails } from '../models/ExerciseDetails';
import { WgerApiIntegrationService } from '../wger-api-integration.service';

import { Set } from '../models/Set';
import { SetsApiIntegrationService } from '../sets-api-integration.service';


@Component({
  selector: 'app-lift-log',
  templateUrl: './lift-log.component.html',
  styleUrls: ['./lift-log.component.css']
})
export class LiftLogComponent implements OnInit {
  currentExcerciseID: string = ""
  currentExerciseDetails: ExerciseDetails = { name: "", id: "", description: "" }

  public sets: Set[] = []
  newSet: Set = {
    id: 0,
    exerciseID: 0,
    date: "",
    reps: 0,
    weight: 0
  }

  constructor(private route: ActivatedRoute, private exerciseService: WgerApiIntegrationService, private setService: SetsApiIntegrationService) { }

  ngOnInit() {
    this.refreshSets()

    this.route.parent?.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.currentExcerciseID = params.get('id') || "";
          return this.exerciseService.getExerciseDetails(this.currentExcerciseID)
        })
      ).subscribe((response) => {
        this.currentExerciseDetails = response
        this.newSet.exerciseID = parseInt(response.id)
      });

    this.setService.getSets()
      .subscribe(response => {
        this.sets = response.sets.filter(set => set.exerciseID == parseInt(this.currentExcerciseID))
      })
  }

  refreshSets() {
    this.setService.getSets()
      .subscribe(response => {
        this.sets = response.sets.filter(set => set.exerciseID == parseInt(this.currentExcerciseID))
      })
  }

  addSet() {
    this.setService.addSet(this.newSet)
      .subscribe(response => {
        console.log(response)
        this.refreshSets();
      })
  }
}

