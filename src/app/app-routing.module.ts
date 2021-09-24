import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeSigninComponent} from './prime-signin/prime-signin.component';
import { PrimeLandingComponent} from './components/prime-landing/prime-landing.component';

const routes: Routes = [
  {path:'', component:PrimeSigninComponent, },
  {path:'landing', component:PrimeLandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
