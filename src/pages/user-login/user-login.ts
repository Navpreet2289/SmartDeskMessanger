import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-user-login',
  templateUrl: 'user-login.html',
})
export class UserLogin {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserLogin');
  }

  nextPage(){ this.navCtrl.push(TabsPage); }

  forgotPasswordPage(){
    let alert = this.alertCtrl.create({
      title: 'Password Forgotten?',
      message: 'Please contact your superior who has access to the Smartdesk account.',
      buttons: ['OK']
    });
    alert.present();
  }

}
