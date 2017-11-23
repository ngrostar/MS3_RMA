import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AboutPage} from "../about/about";
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

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, public geolocation: Geolocation) {
    this.loadMap();
  }

  ionViewDidLoad(){
  }

  openModal() {
    let listModal = this.modalCtrl.create(AboutPage, { modal: true });
    listModal.onDidDismiss(data => {
      console.log(data);
      for(let i=0; i<data.length; i++) {
        this.addSpecificMarker(data[i]);
      }
      this.map.setZoom(6);
      let germanCenter = new google.maps.LatLng(51.07452793995768, 10.261352656249997);
      this.map.setCenter(germanCenter);

      let coordinates = [];

      for(let i=0; i<data.length; i++) {
        coordinates[coordinates.length] = new google.maps.LatLng(data[i].breite, data[i].laenge);
      }
      console.log(coordinates);
      let polyline = new google.maps.Polyline({
        path: coordinates,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      console.log(polyline);
      polyline.setMap(this.map);
// Polyline leeren
//polyline.setPath([]);
    });



    listModal.present();
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

    let latLng = new google.maps.LatLng(post.laenge, post.breite);
    this.map.setCenter(latLng);

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });

    let content = "<h2>"+post.name+"</h2><p>Länge: " + post.laenge + "<br>Breite: " + post.breite + "</p>";

    this.addInfoWindow(marker, content);
  }

  addCenterMarker(){
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    console.log(this.map.getCenter().lat(), this.map.getCenter().lng());

    let content = "<h2>Zentrum!</h2>";

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
