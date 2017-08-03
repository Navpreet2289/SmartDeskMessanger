import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { UserLogin } from '../pages/user-login/user-login';
import { TabsPage } from '../pages/tabs/tabs';
import { LiveSession } from '../pages/live-session/live-session';
import { PastSession } from '../pages/past-session/past-session';
import { Settings } from '../pages/settings/settings';
import { MessageDetail } from '../pages/message-detail/message-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    HttpModule,
    IonicModule.forRoot(MyApp, {
        tabsPlacement: 'top',
      }
    ),
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
