import {Component} from '@angular/core';
import {Events, NavController} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import {SettingsPage} from "../settings/settings";
import {KartePage} from "../karte/karte";  // https://ionicframework.com/docs/native/geolocation/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  point = {'lat': 0, 'long': 0, 'time': null};
  timer = setInterval(() => {this.getGPS('a')}, 4000);

  constructor(public navCtrl: NavController, public geolocation: Geolocation, public events: Events) {
      this.getGPS('0');

      events.subscribe('changedInterval', (interval) => {
        console.log("Interval empfangen: " + interval);
        clearInterval(this.timer);
        this.timer = setInterval(() => {this.getGPS('b')}, interval);
      });
  }

  getGPS(c) {
    if (SettingsPage.isToggled) {
      console.log("getting Location " + c);
      this.geolocation.getCurrentPosition().then((resp) => {
        this.point.lat  = resp.coords.latitude  + ((Math.random() - 0.5) * 0.008);
        this.point.long = resp.coords.longitude + ((Math.random() - 0.5) * 0.008);
        this.point.time = new Date(resp.timestamp);
        this.point.time.toLocaleTimeString();
        this.events.publish('point:added', this.point);
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    }
    else {
      console.log("Einstellung ausgetoggled " + c);
    }
  }

  goToMaps() {
    this.navCtrl.push(KartePage);
  }
}
