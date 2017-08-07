import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-user-login',
  templateUrl: 'user-login.html',
})
export class UserLogin {

  private loading: any;
  private token: string;
  private data: any;
  public loginForm = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
    token: ""
  });

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private storage: Storage,
    public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController,
    public fb: FormBuilder,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.storage.get('client_token')
      .then(data => {
        this.token = data;
      });
    console.log('ionViewDidLoad UserLogin');
  }

  doLogin() {
    this.showLoader();
    this.loginForm.value.token = this.token;
    this.authService.login(this.loginForm.value).then((result) => {
      this.loading.dismiss();
      this.data = result;
      this.storage.set('access_token', this.data.accessToken);
      this.presentToast(this.data.statusDesc);
      this.nextPage();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(JSON.parse(err._body).statusDesc);
    });
  }

  nextPage(){ this.navCtrl.setRoot(TabsPage); }

  forgotPasswordPage(){
    let alert = this.alertCtrl.create({
      title: 'Password Forgotten?',
      message: 'Please contact your superior who has access to the Smartdesk account.',
      buttons: ['OK']
    });
    alert.present();
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 10000,
      position: 'bottom',
      dismissOnPageChange: true
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast: ' + msg);
    });
    toast.present();
  }

}
