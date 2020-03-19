import { Injectable } from '@angular/core';
import { IUser } from './interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// const Url='http://localhost:51537/api/New';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  postUser( poc: IUser ): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:51537/api/New', poc);
  }

  getUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:51537/api/New');
  }
  constructor(private http: HttpClient) { }
}
