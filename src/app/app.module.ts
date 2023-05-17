import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { muzluMobileApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AuthProvider } from '../providers/auth/auth';
import { EventsProvider } from '../providers/events/events';
import { HashtagProvider } from '../providers/hashtag/hashtag';
import { MoodProvider } from '../providers/mood/mood';
import { PagessProvider } from '../providers/pagess/pagess';
import { PostProvider } from '../providers/post/post';
import { SearchProvider } from '../providers/search/search';
import { SettingsProvider } from '../providers/settings/settings';
import { ShopProvider } from '../providers/shop/shop';
import { TasksProvider } from '../providers/tasks/tasks';
import { UserProvider } from '../providers/user/user';

import { AppOptionsModalPageModule } from '../pages/app-options-modal/app-options-modal.module';
import { CommentModalPageModule } from '../pages/comment-modal/comment-modal.module';
import { FilterModalPageModule } from '../pages/filter-modal/filter-modal.module';
import { GeneralSettingsModalPageModule } from '../pages/general-settings-modal/general-settings-modal.module';
import { MorePostOptModalPageModule } from '../pages/more-post-opt-modal/more-post-opt-modal.module';
import { MuzmojiModalPageModule } from '../pages/muzmoji-modal/muzmoji-modal.module';
import { NotificationModalPageModule } from '../pages/notification-modal/notification-modal.module';
import { PostModalPageModule } from '../pages/post-modal/post-modal.module';
import { ProfileSettingsModalPageModule } from '../pages/profile-settings-modal/profile-settings-modal.module';
import { ShareModalPageModule } from '../pages/share-modal/share-modal.module';
import { UserProfilePageModule } from '../pages/user-profile/user-profile.module';
import { UserFollowInfoModalPageModule } from '../pages/user-follow-info-modal/user-follow-info-modal.module';
import { UserProfileOptModalPageModule } from '../pages/user-profile-opt-modal/user-profile-opt-modal.module';

@NgModule({
  declarations: [
    muzluMobileApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(muzluMobileApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    AppOptionsModalPageModule,
    CommentModalPageModule,
    FilterModalPageModule,
    GeneralSettingsModalPageModule,
    MorePostOptModalPageModule,
    MuzmojiModalPageModule,
    NotificationModalPageModule,
    PostModalPageModule,
    ProfileSettingsModalPageModule,
    ShareModalPageModule,
    UserProfilePageModule,
    UserFollowInfoModalPageModule,
    UserProfileOptModalPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    muzluMobileApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    EventsProvider,
    HashtagProvider,
    MoodProvider,
    PagessProvider,
    PostProvider,
    SearchProvider,
    SettingsProvider,
    ShopProvider,
    TasksProvider,
    UserProvider
  ]
})
export class AppModule { }
