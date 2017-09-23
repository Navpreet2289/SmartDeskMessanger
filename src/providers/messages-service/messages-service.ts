import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { AppConfig } from '../../app/app.config';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class MessagesServiceProvider {

  constructor(public http: Http, private appConfig: AppConfig, private storage: Storage) {
    console.log('Hello MessagesServiceProvider Provider');
  }

  checkClient(start_date, token) {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('caller_token', token.trim());
    urlSearchParams.append('start_date', start_date.trim());
    let body = urlSearchParams.toString();

    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      let options = new RequestOptions({headers: headers});

      this.http.post(this.appConfig.apiBaseUrl+'checkclient', body, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

}
