import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Excercise } from '../models/Exercise';
import { WgerApiIntegrationService } from '../wger-api-integration.service';

@Component({
  selector: 'app-muscle-group-exercises',
  templateUrl: './muscle-group-exercises.component.html',
  styleUrls: ['./muscle-group-exercises.component.css']
})
export class MuscleGroupExercisesComponent implements OnInit {
  currentMuscle = ""
  exerciseList: Excercise[] = []
  constructor(private route: ActivatedRoute, private exerciseService: WgerApiIntegrationService) {
  }

  ngOnInit() {
    this.currentMuscle = this.route.snapshot.paramMap.get("name") || "";
    this.exerciseService.getExercises().subscribe(response => {
      this.exerciseList = response.results.filter(result => result.language.short_name == "en" && result.category.name == this.currentMuscle)
    })
  }
}
