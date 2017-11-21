import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';  // https://ionicframework.com/docs/native/geolocation/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lat:number;
  long:number;
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
      this.getGPS();
  }

  getGPS() {
    console.log("getting Location");
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("trotzdem da");
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  // t = setInterval(this.getGPS, 2000);
}
