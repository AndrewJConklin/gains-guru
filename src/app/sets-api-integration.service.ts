import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Set } from './models/Set';
import { Observable, throwError } from 'rxjs';


type SetResponse = {
  sets: Set[];
}

@Injectable({
  providedIn: 'root'
})
export class SetsApiIntegrationService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  constructor(private http: HttpClient) {
  }

  getSets(): Observable<SetResponse> {
    return this.http.get<SetResponse>('https://gains-guru.herokuapp.com/api/set/')
  }

  addSet(set: Set): Observable<any> {
    const body = JSON.stringify(set);
    return this.http.post('https://gains-guru.herokuapp.com/api/set/', body, this.httpOptions)
  }

}
