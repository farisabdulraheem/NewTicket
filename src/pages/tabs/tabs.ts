import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage} from '../contact/contact';
import { HomePage} from '../home/home';

@Component({
    selector: 'page-tabs',
    templateUrl:'tabs.html'
  })
  export class TabsPage {
tab1Root=HomePage;
tab2Root=AboutPage;
tab3Root=ContactPage;
    constructor() {
  
    }
  
  }