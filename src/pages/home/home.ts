import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { api } from '../../providers/api/api';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  test:string
  slides:any;
  users: any;
  upcoming:any;
  searchTerm: string = '';
  rating: any;
  movie_id:number;
  constructor(public navCtrl: NavController,public restapiService: api,public _DomSanitizer: DomSanitizer) {
    this.test = "showing";
    this.getSlides();
    this.getUsers();

    
  
    this.getUpcoming();
  }
  setFilteredItems() {
    this.users = this.restapiService.filterItems(this.searchTerm);
  }
  getUsers() {
    this.restapiService.getUsers()
    .then(data => {
      this.users = data.info;
   
    });
   
  }
  getUpcoming() {
    this.restapiService.getUpcoming()
    .then(data => {
      this.upcoming = data.info;
  
    });
}
getSlides(){
  this.restapiService.getSlides()
  .then(data => {
    this.slides = data.info;
  });
}
singleMovie(movie_id)
{  this.navCtrl.push('SinglemoviePage');
  
}
}