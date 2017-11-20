import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import { PopoverController } from 'ionic-angular';
import {FormInputPage} from "../form-input/form-input";






@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})

export class AboutPage {
  posts: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public http: Http, public popoverCtrl: PopoverController) {
    this.http.get('/assets/Sternwarten.json').map(res => res.json()).subscribe(data => {
      this.posts = data;
    });

    console.log("HALLO\n" + this.posts);
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
    console.log(localStorage.getItem("SternwarteASDF"));
  }
}

