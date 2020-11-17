import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent{

  API_KEY = "f9475157abe948c624c563085f0f26bf";

  weather= ''

 async onSubmit (f: NgForm)  {

    const city = f.value.first
    const api_url = await
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}&units=metric`);
const data = await api_url.json();// false
this.weather = `${data.main.temp} C`
  }
}
