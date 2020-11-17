import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherComponent } from './weather/weather.component';
import { DateComponent } from './date/date.component';
import { CityComponent } from './city/city.component';
import { FormsModule } from '@angular/forms';
import { SpaceComponent } from './space/space.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    WeatherComponent,
    DateComponent,
    CityComponent,
    SpaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
