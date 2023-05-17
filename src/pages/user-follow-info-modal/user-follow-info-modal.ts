import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the UserFollowInfoModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-follow-info-modal',
  templateUrl: 'user-follow-info-modal.html',
})
export class UserFollowInfoModalPage {
  _myParam: string;
  pageTitle: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this._myParam = navParams.get('followType');

    if (this._myParam == 'follows') {
      this.pageTitle = 'Takip Edilenler';
    } else if (this._myParam == 'followers') {
      this.pageTitle = 'Takip Edenler';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserFollowInfoModalPage');
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
