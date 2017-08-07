import { Component } from '@angular/core';
import { App, NavController, AlertController, NavParams } from 'ionic-angular';
import { UserLogin } from "../user-login/user-login";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class Settings {

  constructor(
    private app: App,
    private storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Settings');
  }
  logout(){
    this.storage.remove('access_token');
    this.app.getRootNav().setRoot(UserLogin);
  }
}
