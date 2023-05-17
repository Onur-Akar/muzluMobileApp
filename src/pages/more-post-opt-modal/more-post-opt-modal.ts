import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the MorePostOptModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more-post-opt-modal',
  templateUrl: 'more-post-opt-modal.html',
})
export class MorePostOptModalPage {
  postType: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePostOptModalPage');
  }

  goPostModal(postType) {
    this.postType = postType;
    this.dismiss();
  }

  dismiss() {
    let data = {
      postType: this.postType
    }
    this.viewCtrl.dismiss(data);
  }

}