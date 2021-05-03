import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { AboutComponent } from './pages/public/about/about.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { CrudComponent } from './pages/private/crud/crud.component';
import { GalleryComponent } from './pages/private/gallery/gallery.component';
import { ProfileComponent } from './pages/private/profile/profile.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'about', component: AboutComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'crud', component: CrudComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
