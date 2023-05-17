import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { UserProfileOptModalPage } from '../user-profile-opt-modal/user-profile-opt-modal';
import { UserFollowInfoModalPage } from '../user-follow-info-modal/user-follow-info-modal'

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCrtl: ModalController) {
    localStorage.setItem('current_page', 'UserProfilePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }

  back() {
    localStorage.removeItem('current_page')
    this.navCtrl.pop();
  }

  openProfileOptModal() {
    let profileOptions = this.modalCrtl.create(UserProfileOptModalPage);

    profileOptions.present();
  }

  openFollowInfoModal(followType) {
    let followInfo = this.modalCrtl.create(UserFollowInfoModalPage, { 'followType': followType });

    followInfo.present();
  }

}
