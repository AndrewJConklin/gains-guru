import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Entry } from './models/Entry';
import { catchError, Observable, throwError } from 'rxjs';

type EntryResponse = {
  entries: Entry[];
}

@Injectable({
  providedIn: 'root'
})
export class EntriesApiIntegrationService {
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

  getEntries(): Observable<EntryResponse> {
    return this.http.get<EntryResponse>('https://gains-guru.herokuapp.com/api/entries/')
  }

  addEntry(entry: Entry): Observable<any> {
    const body = JSON.stringify(entry);
    return this.http.post('https://gains-guru.herokuapp.com/api/entries/', body, this.httpOptions)
      .pipe(catchError(this.handleError))
  }

  deleteEntry(id: number): Observable<void> {
    return this.http.delete<void>(`https://gains-guru.herokuapp.com/api/entries/${id}`)
      .pipe(catchError(this.handleError))
  }
}
