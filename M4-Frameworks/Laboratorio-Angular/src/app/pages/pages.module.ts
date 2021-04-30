import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos
import { PrivateModule } from './private/private.module';
import { PublicModule } from './public/public.module';


@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    PrivateModule,
    PublicModule
  ],
  
})
export class PagesModule { }
