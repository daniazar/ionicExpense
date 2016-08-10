import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';



import {LoginPage} from './pages/login/login';
import * as firebase from 'firebase';
import {CompaniesListPage} from './pages/companies-list/companies-list';

@Component({
  templateUrl: 'build/app.html'
})

var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
};

class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    private platform: Platform,
    private menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'Companies', component: CompaniesListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      firebase.initializeApp(config);
      StatusBar.styleDefault();
    });
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // If there's a user take him to the home page.
      this.rootPage = HomePage;
    } else {
    // If there's no user logged in send him to the LoginPage
      this.rootPage = LoginPage;
    }

  });
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
