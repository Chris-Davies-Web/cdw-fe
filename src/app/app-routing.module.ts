import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { CroDevComponent } from './cro/cro-dev/cro-dev.component';

const routes: Routes = [ 
  { path: '',
    component: HomeComponent
  },
  { path: 'cro',
    component: CroDevComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
