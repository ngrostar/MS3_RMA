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
    alert("getting Location");
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });

  }

  // funktioniert beides nicht richtig!
  t = setInterval(this.getGPS, 2000);
  // timer2 = setInterval(function(){
  //   alert("setTimeout");
  //   let p = this.getGPS;
  // }, 2000);


}
