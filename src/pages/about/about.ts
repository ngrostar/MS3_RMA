import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  posts:any;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController,public http: Http) {
    this.http.get('/assets/Sternwarten.json').subscribe(data => {
      this.posts=data;
      console.log(this.posts);
    });
  }
  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];


  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
  addData(){
    let alert = this.alertCtrl.create({
      title: 'Hinzufügen gedrückt',
      subTitle: 'Du hast hinzufügen gedrückt und dabei toll ausgesehen!',
      buttons: ['OK']
    });
    alert.present();
  }
  deleteData(item){
    let alert = this.alertCtrl.create({
      title: 'Löschen gedrückt',
      subTitle: 'Du hast löschen gedrückt!'+item,
      buttons: ['OK']
    });
    alert.present();
  }

}

