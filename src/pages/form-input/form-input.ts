import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import { Events } from 'ionic-angular';

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


  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public alertCtrl: AlertController,) {
  }

  //Idee: hier statt Variablen ein OBJEKT!
  zaehler;
  name;
  jahr;
  ort;
  object = {
    name: String,
    jahr: String,
    ort: String
  };

  saveData() {
    if (this.name && this.ort && this.jahr) {
      this.zaehler = parseInt(localStorage.getItem("zaehler"));
      if (!this.zaehler) {
          this.zaehler = 0;
      }
      this.zaehler = this.zaehler + 1;
      localStorage.setItem("zaehler", this.zaehler);

      this.object.name = this.name;
      this.object.jahr = this.jahr;
      this.object.ort = this.ort;
      console.log(this.object);
      localStorage.setItem("Sternwarte" + this.zaehler.toString(), JSON.stringify(this.object));


      let alert = this.alertCtrl.create({
        title: this.name + " hinzugefügt!",
        buttons: ['Danke für die Info']
      });
      alert.present();
      this.events.publish('item:added', this.name);
    } else {
      let alert = this.alertCtrl.create({
        subTitle: "Bitte füllen Sie alle Felder aus",
        buttons: ['OK']
      });
      alert.present();
    }
  }

  restoreContents() {
    //stelle hier die Inhalte wieder her, sodass oben nicht immer alles überschrieben wird!!!
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormInputPage');
  }
}
