import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import {SettingsPage} from "../settings/settings";  // https://ionicframework.com/docs/native/geolocation/

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
    if(SettingsPage.isToggled=true){
    console.log("getting Location");
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });}
    else{
      this.lat=-1;
      this.long=-1;
    }
  }

   //t = setInterval(this.getGPS, 2000);
}
