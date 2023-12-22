import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { HeaderNavComponent } from './navigation/header-nav/header-nav.component';
import { FooterComponent } from './navigation/footer/footer.component';

import { CroModule } from './cro/cro.module';
import { HomeModule } from './home/home.module';

const uri = 'http://localhost:1337/graphql'; // Replace with your Strapi GraphQL URL

@NgModule({
  declarations: [AppComponent, HeaderNavComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    LayoutModule,
    CroModule,
    HomeModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    HttpClientModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
