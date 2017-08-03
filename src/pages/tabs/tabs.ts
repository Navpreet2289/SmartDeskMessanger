import { Component } from '@angular/core';
import { LiveSession } from '../live-session/live-session';
import { PastSession } from '../past-session/past-session';
import { Settings } from '../settings/settings';

import { NavController, NavParams ,MenuController } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  hide : boolean = true;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = LiveSession;
  tab2Root: any = PastSession;
  tab3Root: any = Settings;

  constructor(public navCtrl: NavController, public navParams: NavParams , public menuCtrl: MenuController) {

  }


}
