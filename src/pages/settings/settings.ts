import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {
  static isToggled:boolean = true;
  static interval:number;
  inputinterval;


  constructor(public navCtrl: NavController, public events: Events, public navParams: NavParams) {
    this.inputinterval = 4000;

  }

  toggleLocationGetting() {
    if (SettingsPage.isToggled){
      SettingsPage.isToggled = false;}
    else {
      SettingsPage.isToggled = true;
    }
    console.log("Toggled: "+ SettingsPage.isToggled);
    this.events.publish('toggled');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  changeInterval(){
    SettingsPage.interval = this.inputinterval;
    console.log("gesetztes Interval:"+ SettingsPage.interval);
    this.events.publish('changedInterval', this.inputinterval);
  }

}
