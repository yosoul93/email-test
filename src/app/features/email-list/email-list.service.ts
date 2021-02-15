import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { Email } from 'src/app/shared/models/email.interface';
import { NavigationEnd, Router } from '@angular/router';

@Injectable()

export class EmailListService {

  public isPageReload: boolean = false;
  public previousNavigationUrl: string = '';
  public currentNavigationUrl: string = '/movies';

  constructor(
    private router: Router,
    private _httpClient: HttpClient
  ) { 
     // detect when the user reload the page
    // get previous and current navigation url
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.previousNavigationUrl = this.currentNavigationUrl;
        this.currentNavigationUrl = event.url;
        if (event.id === 1 && event.url === event.urlAfterRedirects) {
          this.isPageReload = true;
        } else {
          this.isPageReload = false;
        }
      })
  }

  getEmailList(): Observable <any> {
    return this._httpClient.get<Email[]>('api/email-list-data/')
      .pipe(
        tap(res => res),
        catchError(error => {
          console.log(error)
          return throwError(error);
        })
      );
  }

  getEmailDetail(id: string): Observable <any> {
    // in real api, we gonna get the email detail without using find func
    // this is just for conveniences sake
    return this._httpClient.get<Email[]>('api/email-list-data/')
      .pipe(
        map(res => res.find(x => x['id'] === id)),
        catchError(error => {
          console.log(error)
          return throwError(error);
        })
      );
  }

  toISO(date): string {
    return new Date(date).toISOString().slice(0, -1).split('T')[0].toString().replace(/-/g, "/");
  }

  formatDate(date): string {
    const today: string = this.toISO(new Date());
    if (today === this.toISO(date)) {
      return 'h:mm';
    }
    if (new Date(today).getMonth() === new Date(date).getMonth()) {
      return 'MMM d'
    }
    return 'yyyy/MM/dd'
  }
  
}