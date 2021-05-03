import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userKey : string = "user";
  constructor() { }

  public login(user: string, password: string) : boolean {
    if ((user === 'master8@lemoncode.net' && password === '12345678')) {
      if (localStorage.getItem(this.userKey) === null) {
        localStorage.setItem(this.userKey, user);
        console.log('Logged');
      }

      console.log('Already logged');
      return true;
    }

    console.log('Not Logged');
    return false;
  }

  public logout() : void {
    localStorage.removeItem(this.userKey);
  }

  public isLogged() : boolean {
    return localStorage.getItem(this.userKey) != null;
  }

  public getUsername() : string | null {
    return localStorage.getItem(this.userKey);
  }
}
