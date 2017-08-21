import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from "@ionic/storage";
import { AppVersion } from "@ionic-native/app-version";
import { Device } from '@ionic-native/device';

import { UserLogin } from '../pages/user-login/user-login';
import { TabsPage } from '../pages/tabs/tabs';
import { LiveSession } from '../pages/live-session/live-session';
import { PastSession } from '../pages/past-session/past-session';
import { Settings } from '../pages/settings/settings';
import { MessageDetail } from '../pages/message-detail/message-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from "ionic-angular";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { AppConfig } from './app.config';

@NgModule({
  declarations: [
    MyApp,

    UserLogin,
    TabsPage,
    LiveSession,
    PastSession,
    Settings,
    MessageDetail,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
        tabsPlacement: 'bottom',
        platforms: { ios: { scrollAssist: false, autoFocusAssist: false } }
      }
    ),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    UserLogin,
    TabsPage,
    LiveSession,
    PastSession,
    Settings,
    MessageDetail,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    AppConfig,
    AppVersion,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
