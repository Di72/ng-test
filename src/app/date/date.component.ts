import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent {

  constructor() {this.fn() }
  datee = ''
fn() {
  setTimeout(()=>{
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const hours = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();
    this.datee = date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
  }, 0)
  setInterval(()=>{
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const hours = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();
    this.datee = date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
  }, 1000)
}
}
