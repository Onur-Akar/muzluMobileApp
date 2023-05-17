import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ShopProvider} from "../../providers/shop/shop";

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {
  products: Array<any> = new Array<any>();


  constructor(public navCtrl: NavController, public navParams: NavParams, private shopProvider: ShopProvider) {
    this.shopProvider.getProducts()
      .subscribe((result:any) => {
          let products = result.data.data;

          for(let product of products){
            this.products.push(product);
          }
          console.log("Success : " + {result});
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

}
