import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   user: IUser | null = null;

   get isLoggedIn() {
    return this.user !== null;
   }
   
  constructor(private http:HttpClient) { }

  register(username: string, email: string, password: string) {
    this.http.post<any>('/api/register', {username, email, password});
  }

  login( email: string, password: string) {
    this.http.post<any>('/api/register', { email, password});
  }

}