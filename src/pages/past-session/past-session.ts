import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-past-session',
  templateUrl: 'past-session.html',
})
export class PastSession {
  public sessions = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PastSessionPage');
  }

  getItems(){

  }

}
