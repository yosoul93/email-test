import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { EmailList } from 'src/app/shared/models/movie.interface';

@Injectable()

export class EmailListService {

  constructor(
    private _httpClient: HttpClient
  ) { 
  }

  getEmailList(): Observable <any> {
    return this._httpClient.get<EmailList[]>('api/email-list-data/')
      .pipe(
        tap(res => res),
        catchError(error => {
          console.log(error)
          return throwError(error);
        })
      );
  }
  
}