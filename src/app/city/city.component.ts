import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

type PlaceType = {
  pageid: number,
  title: string,
  thumbnail: SourceType
}

type SourceType = {
  source: string
}

@Component({
  selector: 'app-weather',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent{

  API_KEY = "f9475157abe948c624c563085f0f26bf";

  place: PlaceType[]

  constructor () {
    this.place = []
  }

 async onSubmit (f: NgForm)  {
    const city = f.value.first
    const api_url = await
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}&units=metric`);
const data = await api_url.json();
const api_wiki = await
fetch(`https://cors-anywhere.herokuapp.com/en.wikipedia.org/w/api.php?action=query&format=json&prop=coordinates%7Cpageimages&generator=geosearch&pithumbsize=100&ggscoord=${data.coord.lat}%7C${data.coord.lon}&ggsradius=10000`)
const data_wiki = await api_wiki.json()
this.place = Object.values(data_wiki.query.pages)
  }
}
