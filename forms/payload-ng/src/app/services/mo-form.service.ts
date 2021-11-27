import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {
  convertFormGroup,
  MoFormData,
} from '../models/MoFormData';

@Injectable({
  providedIn: 'root',
})
export class MoFormService {
  private moFormDataUrl = 'api/moform';

  httpJsonOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  httpFormOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }),
  };

  getMoFormDatas(): Observable<MoFormData[]> {
    return this.http
      .get<MoFormData[]>(this.moFormDataUrl, this.httpJsonOptions)
      .pipe(catchError(this.handleError<MoFormData[]>('getMoFormData', [])));
  }

  deleteMoFormData(id: string): Observable<any> {
    const requestString = this.moFormDataUrl.concat('/', id);

    return this.http
      .delete<MoFormData>(requestString, this.httpJsonOptions)
      .pipe(
        tap((_) => console.log(`deleted MoFormData ${id}`)),
        catchError(this.handleError<MoFormData>('deleteMoFormData'))
      );
  }

  submit(moFormData: MoFormData): Observable<any> {
    if (moFormData.valid) {
      moFormData.originUrl = this.moFormDataUrl;
      moFormData.formId = 'webpageforms';
      const data = convertFormGroup(moFormData);
      return this.http
        .post<MoFormData>(
          this.moFormDataUrl,
          JSON.stringify(data),
          this.httpJsonOptions
        )
        .pipe(catchError(this.handleError<MoFormData>('postMoFormData')));
    } else {
      alert('Invalid Form');
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
