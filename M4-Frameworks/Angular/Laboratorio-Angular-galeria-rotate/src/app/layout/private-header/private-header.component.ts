import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})
export class PrivateHeaderComponent implements OnInit {

  constructor(private authService: AuthService, 
              public router: Router) { }

  ngOnInit(): void {
  }

  public get userName() : string | null {
    return this.authService.getUsername();
  }

  public salir() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
