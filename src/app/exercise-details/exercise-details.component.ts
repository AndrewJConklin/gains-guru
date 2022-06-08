import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExerciseDetails } from '../models/ExerciseDetails';
import { WgerApiIntegrationService } from '../wger-api-integration.service';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css']
})
export class ExerciseDetailsComponent implements OnInit {
  currentMuscle: string = ""
  currentExcerciseID: string = ""
  currentExerciseDetails: ExerciseDetails = { name: "", id: "", description: "" }

  constructor(private route: ActivatedRoute, private exerciseService: WgerApiIntegrationService) { }

  ngOnInit() {
    this.currentMuscle = this.route.snapshot.paramMap.get("name") || ""
    this.currentExcerciseID = this.route.snapshot.paramMap.get("id") || ""
    this.exerciseService.getExerciseDetails(this.currentExcerciseID).subscribe(response => {
      this.currentExerciseDetails = response
    })
  }

}
