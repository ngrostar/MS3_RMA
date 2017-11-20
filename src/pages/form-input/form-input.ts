import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FormInputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-input',
  templateUrl: 'form-input.html',
})
export class FormInputPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  //Idee: hier statt Variablen ein OBJEKT!
  name;
  eroeffnet;
  ort;
  saveData(){
    localStorage.setItem("name", this.name);
    console.log("geschrieben:"+this.name);
    localStorage.setItem("ort",this.ort);
    console.log("geschrieben:"+this.ort);
    localStorage.setItem("eroeffnet", this.eroeffnet);
    console.log("geschrieben:"+this.name);
    alert(localStorage.getItem("name") + " " + localStorage.getItem("ort"));
  }
  restoreContents(){
    //stelle hier die Inhalte wieder her, sodass oben nicht immer alles überschrieben wird!!!
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FormInputPage');
  }

}
