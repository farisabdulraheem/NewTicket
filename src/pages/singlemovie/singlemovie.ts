import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { api } from '../../providers/api/api';

/**
 * Generated class for the SinglemoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singlemovie',
  templateUrl: 'singlemovie.html',
})
export class SinglemoviePage {
  singledata:any;
  movie_id:any;
  constructor(public navCtrl: NavController, public restapiService: api, public navParams: NavParams) {
    this.movie_id = navParams.get("movie_id");
    this.getsingleMovie(this.movie_id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SinglemoviePage');
  }
  getsingleMovie(movie_id)
  {  
    this.restapiService.getSingleMovie(movie_id)
    .subscribe((response) => {
      this.setSingleMovieData(response.info);
    }, (error) => {
        console.log(error);
    });
  }
  setSingleMovieData(datar){
    this.singledata = datar;
    console.log(this.singledata);
  }
}
