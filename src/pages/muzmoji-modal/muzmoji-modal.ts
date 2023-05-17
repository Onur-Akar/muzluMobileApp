import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the MuzmojiModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-muzmoji-modal',
  templateUrl: 'muzmoji-modal.html',
})
export class MuzmojiModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MuzmojiModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  sendMuzMojiToComment(path: any) {
    this.viewCtrl.dismiss(path);
  }

}
