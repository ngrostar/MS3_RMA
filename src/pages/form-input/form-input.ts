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
  zaehler;
  name;
  eroeffnet;
  ort;
  object={
    oname:String,
    oeroefnnet:String,
    oort:String
  };
  saveData(){
    this.zaehler=localStorage.getItem("zaehler");
    this.zaehler=this.zaehler+1;
    localStorage.setItem("zaehler",this.zaehler);

    this.object.oname=this.name;
    this.object.oeroefnnet=this.eroeffnet;
    this.object.oort=this.ort;
    console.log(this.object);
    localStorage.setItem("Sternwarte"+this.zaehler, JSON.stringify(this.object));
  }
  restoreContents(){
    //stelle hier die Inhalte wieder her, sodass oben nicht immer alles überschrieben wird!!!
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FormInputPage');
  }

}
