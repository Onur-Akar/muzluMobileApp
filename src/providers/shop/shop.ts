import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environment';
import { SettingsProvider } from '../settings/settings';

/*
  Generated class for the ShopProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShopProvider {
  _apiUrl: string = environment.base_path;

  // Shop request //
  _shop = {
    product_list: this._apiUrl + environment.get_products,
    product: this._apiUrl + environment.get_product,
    buy_product: this._apiUrl + environment.buy_product,
    add_target_product: this._apiUrl + environment.target_product
  };

  constructor(public http: HttpClient, private settings: SettingsProvider) {
    console.log('Hello ShopProvider Provider');
  }

  // FOR SHOP //
  getProducts(order = null, category_id = null) {
    let data = {
      order: order,
      category_id: category_id
    };

    return this.http.post(this._shop.product_list, data, this.settings._headerSettingsWAuth);
  }

  getProduct(product_id) {
    let data = {
      product_id: product_id
    };

    return this.http.post(this._shop.product, data, this.settings._headerSettingsWAuth);
  }

  buyProduct(product_id) {
    let data = {
      product_id: product_id
    };

    return this.http.post(this._shop.buy_product, data, this.settings._headerSettingsWAuth);
  }

  addTargetProduct(product_id) {
    let data = {
      product_id: product_id
    };

    return this.http.post(this._shop.add_target_product, data, this.settings._headerSettingsWAuth);
  }

}