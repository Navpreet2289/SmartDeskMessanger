import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, ModalController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { AppVersion } from '@ionic-native/app-version';
import { Device } from '@ionic-native/device';

import { UserLogin } from '../pages/user-login/user-login';
import { SplashPage } from "../pages/splash/splash";
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = null;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    private storage: Storage,
    private appVersion: AppVersion,
    private device: Device,
    public modalCtrl: ModalController
  ) {
    this.initializeApp();
    this.storage.get('access_token')
      .then(data => {
        if(data == null)
          this.rootPage = UserLogin;
        else
          this.rootPage = TabsPage;
      });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleLightContent();
  ﻿    let splash = this.modalCtrl.create(SplashPage);
      splash.present();

      if (this.platform.is('mobileweb') || this.platform.is('core')) {
        this.storage.set('client_token', '00A407EF6F2149AE94B08F9E60CC561F2017-08-06T15:06:45.965Z');
      }else {
        this.generateAppInformation();
        this.generateClientToken();
      }
    });
  }

  async generateAppInformation() {
    // Here getting app information and then setting the information to localStorage to use later for several purposes.
    const code = await this.appVersion.getVersionCode();
    this.storage.set('app_version_code', code);
    console.log('APP Verions Code', code);

    const number = await this.appVersion.getVersionNumber();
    this.storage.set('app_version_number', number);
    console.log('APP Verion Number', number);

    const name = await this.appVersion.getAppName();
    this.storage.set('app_name', name);
    console.log('APP Name', name);

    const package_name = await this.appVersion.getPackageName();
    this.storage.set('app_package', package_name);
    console.log('APP Package Name', package_name);

    this.storage.set('device_uuid', this.device.uuid);
    console.log('Device UUID is: ' + this.device.uuid);
  }

  generateClientToken(){
    let client_token = null;
    this.storage.get('client_token')
      .then(data => {
        client_token = data;
      });
    // unique client token will be indluded with device_uuid + app_installation_date
    if( client_token === null ){
      // if token does not exist, then generate new token string....
      const time_str = new Date().toISOString();
      const uuid_str = this.device.uuid.replace(/-/g , "");
      this.storage.set('client_token', uuid_str + time_str);
    }
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
