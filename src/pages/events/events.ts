import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { EventsProvider } from "../../providers/events/events";

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  events: Array<any> = new Array<any>();
  myevents: Array<any> = new Array<any>();
  myevent: any;
  data: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private eventsProvider: EventsProvider) {
    this.eventsProvider.getAffiliateEvents()
      .subscribe((result: any) => {
        let events = result.data.data;

        for (let event of events) {
          this.events.push(event);
          console.log(event);
        }
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  showEventDetail(event) {
    this.navCtrl.push('EventDetailPage', { event: event });
  }

  goToCreateEvent() {
    this.navCtrl.push('CreateEventPage', {});
  }

}
