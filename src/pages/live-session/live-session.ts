import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { MessageDetail } from '../message-detail/message-detail';
import {FormControl} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-live-session',
  templateUrl: 'live-session.html',
})
export class LiveSession {

  // You can get this data from Smartdesk API. This is a dumb data for being an example.
  public sessions = [
    {
      id: 1,
      sender: 'candelibas@gmail.com',
      av: 'CG',
      last_message: 'How you doin?',
      time: '6h'
    },
    {
      id: 2,
      sender: 'maxlynch@outlook.com',
      av: 'MO',
      last_message: 'LOL. Ionic in 2017',
      time: '11h'
    },
    {
      id: 3,
      sender: 'ashleyosama@yahoo.com',
      av: 'AY',
      last_message: 'Wanna hang out?',
      time: '1d'
    },
    {
      id: 4,
      sender: 'adam_bradley@yandex.com',
      av: 'AY',
      last_message: 'Typescript <3 me',
      time: '3d'
    },
    {
      id: 5,
      sender: 'linus_torvalds@zoho.com',
      av: 'LZ',
      last_message: 'I am installing Ubuntu right now.',
      time: '6d'
    }
  ];
  public items = [];
  public searchTerm: string = '';
  public searchControl: FormControl;
  public searching: any = false;
  public initial: any = true; // true : show search bar and messages list, false: hide everything

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Live Sessions');
    this.items = this.filterSessions(this.searchTerm);
    if(!this.items.length)
      this.initial = false;
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.items = this.filterSessions(this.searchTerm);
    });
  }

  onSearchInput(){
    this.searching = true;
  }

  filterSessions(searchTerm){
    return this.sessions.filter((session) => {
      return session.sender.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  goMessageDetail(sender:string, av:string, last_message:string) {
    this.navCtrl.push(MessageDetail, { sender: sender, av: av, last_message: last_message});
  }

}
