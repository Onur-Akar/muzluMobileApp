import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserFollowInfoModalPage } from './user-follow-info-modal';

@NgModule({
  declarations: [
    UserFollowInfoModalPage,
  ],
  imports: [
    IonicPageModule.forChild(UserFollowInfoModalPage),
  ],
})
export class UserFollowInfoModalPageModule {}
