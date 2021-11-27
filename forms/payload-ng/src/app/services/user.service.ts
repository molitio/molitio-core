import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MoFormData, convertFormGroup } from '../models/MoFormData';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginUrl = 'api/login';

  httpJsonOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  submit(moFormData: MoFormData): Observable<MoFormData> {
    if (moFormData.valid) {
      moFormData.originUrl = this.loginUrl;
      const data = convertFormGroup(moFormData);
      return this.http
        .post<MoFormData>(
          this.loginUrl,
          JSON.stringify(data),
          this.httpJsonOptions
        )
        .pipe(catchError(this.handleError<MoFormData>('postMoFormData')));
    } else {
      alert('Invalid Login');
    }
  }


  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
