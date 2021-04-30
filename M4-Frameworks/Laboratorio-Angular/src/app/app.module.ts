import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Módulos
import { PagesModule } from './pages/pages.module';
import { LayoutModule } from './layout/layout.module';

// Componentes
import { HomeComponent } from './pages/public/home/home.component';
import { PublicHeaderComponent } from './layout/public-header/public-header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { PrivateHeaderComponent } from './layout/private-header/private-header.component';

// Material
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    FooterComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    LayoutModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
