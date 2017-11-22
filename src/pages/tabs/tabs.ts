import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {SettingsPage} from "../settings/settings";
import {KartePage} from "../karte/karte";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = KartePage;
  tab5Root=SettingsPage;


  constructor() {

  }
}
