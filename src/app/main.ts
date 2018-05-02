import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';

platformBrowserDynamic().bootstrapModule(AppModule);
