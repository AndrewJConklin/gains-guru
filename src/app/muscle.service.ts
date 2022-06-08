import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Muscle } from './models/Muscle';

@Injectable({
  providedIn: 'root'
})
export class MuscleService {
  muscleGroups: Muscle[] = [{
    name: "Chest",
    id: 1
  }, {
    name: "Legs",
    id: 2
  }, {
    name: "Back",
    id: 3
  }, {
    name: "Shoulders",
    id: 4
  }, {
    name: "Arms",
    id: 5
  }, {
    name: "Abs",
    id: 6
  }]

  fetchMuscleGroups() {
    return of(this.muscleGroups)
  }
}
