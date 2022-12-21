import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './core/about/about.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { CatalogComponent } from './trip/catalog/catalog.component';
import { DetailsComponent } from './trip/details/details.component';
import { CreateComponent } from './trip/create/create.component';
import { TripModule } from './trip/trip.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    AuthRoutingModule,
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    TripModule,
    CoreModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
