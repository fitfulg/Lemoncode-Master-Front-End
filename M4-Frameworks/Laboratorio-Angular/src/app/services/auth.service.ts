import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login({username: string, password: string}): boolean {

  }

  logout(): void {

  }

  isLogged(): boolean{

  }

  getUsername(): string{
    
  }

}
