import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){
    return !!localStorage.getItem('accessToken')
  }

  getData(){
    return JSON.parse(String(localStorage.getItem('accessToken')))
  }
}
