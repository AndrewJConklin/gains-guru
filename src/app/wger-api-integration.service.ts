import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Exercise } from './models/Exercise';
import { ExerciseDetails } from './models/ExerciseDetails';

type ExerciseResponse = {
  results: Exercise[];
}
@Injectable({
  providedIn: 'root'
})
export class WgerApiIntegrationService {
  constructor(private http: HttpClient) {
  }
  getExercises() {
    return this.http.get<ExerciseResponse>("https://wger.de/api/v2/exerciseinfo/?limit=419")
  }

  getExerciseDetails(exerciseID: string) {
    return this.http.get<ExerciseDetails>(`https://wger.de/api/v2/exerciseinfo/${exerciseID}`)
  }

}
