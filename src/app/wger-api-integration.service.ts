import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Excercise } from './models/Exercise';
import { ExerciseDetails } from './models/ExerciseDetail';

type ExerciseResponse = {
  results: Excercise[];
}

type ExcerciseDetailsResponse = {
  results: ExerciseDetails;
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

  getExerciseDetails() {
    return this.http.get<ExcerciseDetailsResponse>("https://wger.de/api/v2/exerciseinfo/")
  }

}
