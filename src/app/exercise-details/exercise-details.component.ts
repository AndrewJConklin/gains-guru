import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css']
})
export class ExerciseDetailsComponent implements OnInit {
  currentMuscle: string = ""
  currentExcerciseName: string = ""

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentMuscle = this.route.snapshot.paramMap.get("name") || ""
    this.currentExcerciseName = this.route.snapshot.paramMap.get("id") || ""
  }

}
