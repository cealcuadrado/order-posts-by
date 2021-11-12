import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from './post';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class PostsService {
  url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}`).pipe(
      catchError((error: any): Observable<any> => {
        return of({});
      })
    );
  }
}
