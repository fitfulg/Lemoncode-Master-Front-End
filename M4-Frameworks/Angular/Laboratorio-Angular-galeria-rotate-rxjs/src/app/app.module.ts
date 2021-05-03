import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Módulos
import { PagesModule } from './pages/pages.module';
import { LayoutModule } from './layout/layout.module';

// Componentes
import { HomeComponent } from './pages/public/home/home.component';
import { PublicHeaderComponent } from './layout/public-header/public-header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { PrivateHeaderComponent } from './layout/private-header/private-header.component';
import { LoginComponent } from './pages/public/login/login.component';
import { AboutComponent } from './pages/public/about/about.component';
import { CrudComponent } from './pages/private/crud/crud.component';
import { GalleryComponent } from './pages/private/gallery/gallery.component';
import { ProfileComponent } from './pages/private/profile/profile.component';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    FooterComponent,  
    HomeComponent,
    LoginComponent,
    AboutComponent,
    DashboardComponent,
    CrudComponent,
    GalleryComponent,
    ProfileComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    PagesModule,
    LayoutModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
