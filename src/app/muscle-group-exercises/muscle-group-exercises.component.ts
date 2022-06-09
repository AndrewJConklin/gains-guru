import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from '../models/Exercise';
import { WgerApiIntegrationService } from '../wger-api-integration.service';

type Value = {
  searchTerm: string
}
@Component({
  selector: 'app-muscle-group-exercises',
  templateUrl: './muscle-group-exercises.component.html',
  styleUrls: ['./muscle-group-exercises.component.css']
})
export class MuscleGroupExercisesComponent implements OnInit {
  currentMuscle = ""
  exerciseList: Exercise[] = []
  filteredExercises: Exercise[] = []
  public loading: boolean = false
  constructor(private route: ActivatedRoute, private exerciseService: WgerApiIntegrationService) {
  }

  search(values: Value) {
    const searchTerm = values.searchTerm
    this.filteredExercises = this.exerciseList.filter(exercise => exercise.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  ngOnInit() {
    this.currentMuscle = this.route.snapshot.paramMap.get("name") || "";
    this.loading = true
    this.exerciseService.getExercises().subscribe(response => {
      this.exerciseList = response.results.filter(result => result.language.short_name == "en" && result.category.name == this.currentMuscle)
      this.loading = false
    })
  }
  randomExerciseGetter() {
    return this.exerciseList[Math.floor(Math.random() * this.exerciseList.length)].name
  }

}
