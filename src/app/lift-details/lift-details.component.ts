import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { ExerciseDetails } from '../models/ExerciseDetails';
import { WgerApiIntegrationService } from '../wger-api-integration.service';

@Component({
  selector: 'app-lift-details',
  templateUrl: './lift-details.component.html',
  styleUrls: ['./lift-details.component.css']
})
export class LiftDetailsComponent implements OnInit {
  currentExcerciseID: string = ""
  currentExerciseDetails: ExerciseDetails = { name: "", id: "", description: "" }

  constructor(private route: ActivatedRoute, private exerciseService: WgerApiIntegrationService) { }

  ngOnInit() {
    this.route.parent?.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.currentExcerciseID = params.get('id') || "";
          return this.exerciseService.getExerciseDetails(this.currentExcerciseID)
        })
      ).subscribe((response) => {
        this.currentExerciseDetails = response
      })
  }

}
