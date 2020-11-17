import { SpaceComponent } from './space/space.component';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { DateComponent } from './date/date.component';
import { BarComponent } from './bar/bar.component';
import { WeatherComponent } from './weather/weather.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', redirectTo: 'space', pathMatch: 'full'},
    { path: 'space', component: SpaceComponent },
    { path: 'weather', component: WeatherComponent },
    { path: 'date', component: DateComponent },
    { path: 'city', component: CityComponent },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
