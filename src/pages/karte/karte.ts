import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
// import {AboutPage} from "../about/about";
declare let google;
/**
 * Generated class for the KartePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// https://developers.google.com/maps/documentation/javascript/examples/directions-simple

//https://www.joshmorony.com/passing-data-between-pages-in-ionic-2/

@Component({
  selector: 'page-karte',
  templateUrl: 'karte.html',
})
export class KartePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  ionViewDidLoad(){
    this.loadMap();
    let item = this.navParams.get('post');
    console.log(item);
    this.addSpecificMarker(item);
  }

  loadMap(){
    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }, (err) => {
      console.log(err);
    });

  }

  addSpecificMarker(post){
    console.log("Trying to add marker for " + post.name);
    // console.log("Trying to add marker for test");
    // let latLng = new google.maps.LatLng(52,8);
    let latLnge = new google.maps.LatLng(post.breite, post.laenge);
    this.map.setCenter(latLnge);
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLnge
    });

    let content = "<h4>"+post.name+"</h4>";
    // let content = "<h4>test</h4>";

    this.addInfoWindow(marker, content);
  }

  addMarker(){

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);

  }
  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

}
