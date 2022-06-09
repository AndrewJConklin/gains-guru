import { Component, OnInit } from '@angular/core';
import { Muscle } from '../models/Muscle';
import { MuscleService } from '../muscle.service';


@Component({
  selector: 'app-muscle-groups',
  templateUrl: './muscle-groups.component.html',
  styleUrls: ['./muscle-groups.component.css']
})
export class MuscleGroupsComponent implements OnInit {
  muscleGroups: Muscle[] = []
  constructor(private muscleService: MuscleService) {
  }


  ngOnInit(): void {
    this.muscleService.fetchMuscleGroups().subscribe(muscleGroups => {
      this.muscleGroups = muscleGroups
    })
  }

}
