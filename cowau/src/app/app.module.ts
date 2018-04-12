import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Popover } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Gyroscope } from '@ionic-native/gyroscope';
import { DeviceMotion } from '@ionic-native/device-motion';
import { HTTP } from '@ionic-native/http';

import './rxjs-extensions';

//components
import { MyApp } from './app.component';
import { FlipitPage } from '../pages/flipit/flipit';
import { IdlePage } from '../pages/idle/idle';
import { EmojiPage } from '../pages/emoji/emoji';
import { EditPage } from '../pages/edit/edit';

import { NewSoundPopoverPage } from '../newsound-popover/newsound-popover';

import { VisualPage } from '../pages/visual/visual';
import { ServerPage } from '../pages/server/server';

//services
import { GesturesService } from '../services/gestures.service';

//classes
import { Variables } from '../classes/variables';

@NgModule({
  declarations: [
    MyApp,
    EmojiPage,
    FlipitPage,
    IdlePage,
    EditPage,
    VisualPage,
    ServerPage,
    NewSoundPopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EmojiPage,
    FlipitPage,
    IdlePage,
    EditPage,
    VisualPage,
    ServerPage,
    NewSoundPopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Gyroscope,
    DeviceMotion,
    GesturesService,
    HTTP,
    Variables,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
