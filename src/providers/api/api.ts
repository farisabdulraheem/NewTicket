import { Injectable } from '@angular/core';
import { Http, Headers,  RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import * as Constants from '../api/constants';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


/*
  Generated class for the Restapi provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class api {
Slidedata:any;
  data: any;
  Theatredata:any;
  UpcomingData : any;
  SingleData : any;
  apiUrl = Constants.API_ENDPOINT;

  constructor(public http: Http) { 
  }

  filterItems(searchTerm){
    return this.data.info.filter((item) => {
        return item.language.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });     
  }

  getUsers() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/movies_show.php')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getUpcoming() {
    if (this.UpcomingData) {
      return Promise.resolve(this.UpcomingData);
    }

    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/movies_up.php')
        .map(res => res.json())
        .subscribe(data => {
          this.UpcomingData = data;
          resolve(this.UpcomingData);
        });
    });
  }

  getTheatres() {
    if (this.Theatredata) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/theatres.php')
        .map(res => res.json())
        .subscribe(data => {
          this.Theatredata = data;
          resolve(this.Theatredata);
        });
    });
  }

  getSlides() {
    if (this.Slidedata) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/sliders.php')
        .map(res => res.json())
        .subscribe(data => {
          this.Slidedata = data;
          resolve(this.Slidedata);
        });
    });
  }

  getSingleMovie(movie_id) {
    /*let data = JSON.stringify({
      movie_id: movie_id
    });*/
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('movie_id', movie_id);
    let myData = urlSearchParams.toString()

    var headers = new Headers();
    console.log(myData);
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http
        .post(this.apiUrl+'/movie_detail.php', myData, { headers: headers })
        .map(response => response.json())
  } 
}