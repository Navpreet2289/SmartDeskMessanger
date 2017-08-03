import { Component } from '@angular/core';
import { App, NavController, AlertController, NavParams } from 'ionic-angular';
import { UserLogin } from "../user-login/user-login";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class Settings {

  constructor(private app: App, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Settings');
  }
  logout(){
    this.app.getRootNav().setRoot(UserLogin);
  }
}
