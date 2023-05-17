import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PagessProvider } from "../../providers/pagess/pagess";

/**
 * Generated class for the PagessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagess',
  templateUrl: 'pagess.html',
})
export class PagessPage {
  pages: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private pageProvider: PagessProvider) {
    this.loadPages();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagessPage');
  }

  loadPages() {
    this.pageProvider.getPages()
      .subscribe((result: any) => {
        let res = result.data;
        this.pages = Object.keys(res).map(key => res[key])
        console.log("Success : " + { result });
        console.log("Success : " + { result });
        console.log(result);
      },
        err => {
          console.error("Error : " + err);
        },
        () => {
          console.log('getData completed');
        }
      );
  }

}
