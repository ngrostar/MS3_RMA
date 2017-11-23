import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  static isToggled:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    SettingsPage.isToggled=true;
  }
   notify() {
    console.log("Toggled: "+ SettingsPage.isToggled);
    SettingsPage.isToggled=false;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
