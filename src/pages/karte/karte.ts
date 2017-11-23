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
  }

  ionViewDidLoad(){
    this.loadMap();
    // let item = this.navParams.get('post');
    // console.log(item);
    // // while(!this.map) {
    //   console.log(this.map);
    // // }
    // this.addSpecificMarker(item);
  }

  openModal() {
    let listModal = this.modalCtrl.create(AboutPage, { modal: true });
    listModal.onDidDismiss(data => {
      console.log(data);
      for(let i=0; i<data.length; i++) {
        this.addSpecificMarker(data[i]);
      }
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
    // console.log("Trying to add marker for test");
    // let latLng = new google.maps.LatLng(52,8);
    let latLng = new google.maps.LatLng(post.laenge, post.breite);
    this.map.setCenter(latLng);
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
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
