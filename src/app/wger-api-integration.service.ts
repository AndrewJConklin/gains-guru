import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Excercise } from './models/Exercise';

type ExerciseResponse = {
  results: Excercise[];
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

}
