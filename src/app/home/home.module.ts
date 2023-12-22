import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients.component';
import { CroComponent } from './cro/cro.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MglTimelineModule } from 'angular-mgl-timeline';



@NgModule({
  declarations: [
    ClientsComponent,
    CroComponent,
    HeroComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MatIconModule, 
    BrowserAnimationsModule,
    MglTimelineModule
  ]
})
export class HomeModule { }
