import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/common/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private htpp: HttpClient) { }
private API = 'http://localhost:8080/api/signin';

getAllProduct(): Observable<any[]> {
  return this.htpp.get<any[]>(this.API)
 }

 signIn(data: any): Observable<any> {
  return this.htpp.post<any>('http://localhost:8080/api/signin', data)
 }
 signUp(data: any): Observable<any> {
  return this.htpp.post<any>('http://localhost:8080/api/signup', data)
 }
}
