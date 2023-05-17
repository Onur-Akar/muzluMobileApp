import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TasksProvider } from "../../providers/tasks/tasks";
import { TaskDetailPage } from '../task-detail/task-detail';

/**
 * Generated class for the TasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {
  tasks: Array<any> = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private tasksProvider: TasksProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TasksPage');
  }

  loadTasks() {
    this.tasksProvider.getTasks()
      .subscribe((result: any) => {
        let tasks = result.data.data;

        for (let task of tasks) {
          this.tasks.push(task);
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

  showDetail() {
    this.navCtrl.push(TaskDetailPage);
  }

}
