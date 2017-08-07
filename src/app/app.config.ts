import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {

  public apiBaseUrl: string;

  constructor() {
    this.apiBaseUrl = "http://smartdesk.io:8080/smartdesk/api/privatelivechat/";
    // TODO return production backend before deploy
    // this.apiBaseUrl = "";
  }
}
