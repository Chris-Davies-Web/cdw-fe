import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { CroDevComponent } from './cro-dev/cro-dev.component';
import { IntroComponent } from './intro/intro.component';
import { WhyComponent } from './why/why.component';



@NgModule({
  declarations: [
    BlogComponent,
    CroDevComponent,
    IntroComponent,
    WhyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CroModule { }
