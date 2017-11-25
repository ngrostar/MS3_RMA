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
  static interval:number;
  inputinterval;
  isToggled=true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    SettingsPage.isToggled=true;
  }
   notify() {
    console.log(SettingsPage.isToggled);
    if(SettingsPage.isToggled=true){
      SettingsPage.isToggled=false;}
    else{
      SettingsPage.isToggled=true;
    }
     console.log("Toggled: "+ SettingsPage.isToggled);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  changeInterval(){
    SettingsPage.interval=this.inputinterval;
    console.log("gesetztes Interval:"+ SettingsPage.interval);
  }

}
