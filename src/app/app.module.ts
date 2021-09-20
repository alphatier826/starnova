import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgPrimeModule} from './ng-prime.module';
import { PrimeHeaderComponent } from './prime-header/prime-header.component';
import { PrimeFooterComponent } from './prime-footer/prime-footer.component';
import { PrimeSigninComponent } from './prime-signin/prime-signin.component';
import { PrimeLandingComponent } from './components/prime-landing/prime-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeHeaderComponent,
    PrimeFooterComponent,
    PrimeSigninComponent,
    PrimeLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgPrimeModule,
  ],
  providers: [NgPrimeModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
