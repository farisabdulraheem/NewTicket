import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { OneSignal } from '@ionic-native/onesignal';
platformBrowserDynamic().bootstrapModule(AppModule);
