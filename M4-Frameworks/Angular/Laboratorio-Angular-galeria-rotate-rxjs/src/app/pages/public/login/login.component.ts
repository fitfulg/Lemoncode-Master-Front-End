import { Input, Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  private user: string = '';
  private password: string = '';
  private error: string = '';

  constructor(private authService: AuthService, 
              private router: Router) {}

  public get User() : string {
    return this.user;
  }
  public set User(value: string) {
    this.user = value;
  }

  public get Password() : string {
    return this.password;
  }
  public set Password(value: string) {
    this.password = value;
  }

  public get submitError() : string {
    return this.error;
  }
  public set submitError(value: string) {
    this.error = value;
  }

  submit() {
    const loginSucess = this.authService.login(this.user, this.password);
    if (loginSucess) {
      this.router.navigate(['/dashboard']);
    }
    else {
      this.error = 'Usuario y/o contraseña no válidos.';
    }
  }


}
