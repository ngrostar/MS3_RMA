import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
// import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import { PopoverController } from 'ionic-angular';
import {FormInputPage} from "../form-input/form-input";
import { Events } from 'ionic-angular';
import {KartePage} from "../karte/karte";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})

export class AboutPage {
  posts: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public http: Http, public events: Events, public popoverCtrl: PopoverController) {
    this.posts = [];
    this.reloadItems();

    console.log(this.posts);

    events.subscribe('item:added', (name) => {
      this.reloadItems();
    });
  }

  showAlert(item) {
    let alert = this.alertCtrl.create({
      title: item.name,
      subTitle: item.ort,
      message: 'Eröffnet ' + item.jahr,
      buttons: ['OK']
    });
    alert.present();
  }

  addData() {
    /*let alert = this.alertCtrl.create({
      title: 'Hinzufügen gedrückt',
      subTitle: 'Du hast hinzufügen gedrückt und dabei toll ausgesehen!',
      buttons: ['OK']
    });
    alert.present();*/
    this.navCtrl.push(FormInputPage);
  }

  deleteData(item) {
    /*let alert = this.alertCtrl.create({
      title: 'Löschen gedrückt',
      subTitle: localStorage.getItem("Name"),
      buttons: ['OK']
    });
    alert.present();*/
    localStorage.removeItem("Sternwarte"+item.index);
    this.reloadItems();
  }

  reloadItems() {
    let zaehler = parseInt(localStorage.getItem("zaehler"));

    if(!zaehler) {
      zaehler = 0;
    }

    this.posts=[];

    for (let i = 0; i < zaehler; i++) {
      let key = "Sternwarte" + (i+1).toString();
      let item = JSON.parse(localStorage.getItem(key));
      if (item) {
        this.posts[this.posts.length] = item;
      }
    }

    if (this.posts.length==0) {
      this.http.get('/assets/Sternwarten.json').map(res => res.json()).subscribe(data => {
        this.posts = data;
      });
      localStorage.setItem("zaehler", "0");
    }
  }

  toMaps(post) {
    let data = {'post': post};
    this.navCtrl.push(KartePage, data);
  }

}

