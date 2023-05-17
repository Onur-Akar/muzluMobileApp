import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environment';
import { SettingsProvider } from '../settings/settings';

/*
  Generated class for the TasksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TasksProvider {
  _apiUrl: string = environment.base_path;

  // Tasks request //
  _task = {
    task_list: this._apiUrl + environment.get_tasks,
    task: this._apiUrl + environment.get_task,
    join_task: this._apiUrl + environment.join_task,
    complete_task_w_code: this._apiUrl + environment.complete_task_code,
    complete_task_w_file: this._apiUrl + environment.complete_task_upload,
    complete_task_w_survey: this._apiUrl + environment.complete_task_survey,
    completed_task_list: this._apiUrl + environment.completed_task,
    tasks_for_user: this._apiUrl + environment.task_for_user,
  };

  constructor(public http: HttpClient, private settings: SettingsProvider) {
    console.log('Hello TasksProvider Provider');
  }

  // FOR TASK //
  getTasks(order = null, category_id = null) {
    let data = {
      order: order,
      category_id: category_id
    };

    return this.http.post(this._task.task_list, data, this.settings._headerSettingsWAuth);
  }

  getTask(task_id) {
    let data = {
      task_id: task_id
    };

    return this.http.post(this._task.task, data, this.settings._headerSettingsWAuth);
  }

  joinTask(task_id) {
    let data = {
      task_id: task_id
    };

    return this.http.post(this._task.join_task, data, this.settings._headerSettingsWAuth);
  }

  completeTaskWithCode(task_id, confirm_code) {
    let data = {
      task_id: task_id,
      confirm_code: confirm_code
    };

    return this.http.post(this._task.complete_task_w_code, data, this.settings._headerSettingsWAuth);
  }

  completeTaskWithFileUpload(task_id, task_file) {
    let data = {
      task_id: 8377010,
      task_file: task_file
    };

    return this.http.post(this._task.complete_task_w_file, data, this.settings._headerSettingsWAuth);
  }

  complateWithSurvey() {
    return this.http.post(this._task.complete_task_w_survey, this.settings._headerSettingsWAuth);
  }

  getCompletedTaskForUser() {
    return this.http.get(this._task.completed_task_list, this.settings._headerSettingsWAuth);
  }

  getTasksForUser() {
    return this.http.get(this._task.tasks_for_user, this.settings._headerSettingsWAuth);
  }

}
