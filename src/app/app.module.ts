import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgPrimeModule} from './ng-prime.module';
import { PrimeHeaderComponent } from './prime-header/prime-header.component';
import { PrimeFooterComponent } from './prime-footer/prime-footer.component';
import { PrimeSigninComponent } from './prime-signin/prime-signin.component';
import { PrimeLandingComponent } from './components/prime-landing/prime-landing.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeHeaderComponent,
    PrimeFooterComponent,
    PrimeSigninComponent,
    PrimeLandingComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgPrimeModule,
    HttpClientModule,
  ],
  providers: [NgPrimeModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
