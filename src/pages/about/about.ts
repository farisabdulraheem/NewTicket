import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { api } from '../../providers/api/api';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  theatres: any;
  constructor(public navCtrl: NavController, public restapiService: api) {
    this.getTheatres();
  }
  getTheatres() {
    console.log("ssfasd");
    this.restapiService.getTheatres()
    .then(data => {
      this.theatres = data.info;
      console.log(this.theatres);
    });
  }
}