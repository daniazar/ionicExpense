import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {NavController, Loading} from 'ionic-angular';
import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/common';
import {AuthData} from '../../providers/auth-data/auth-data';
import {SignupPage} from '../signup/signup';
import {ResetPasswordPage} from '../reset-password/reset-password';
/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
  providers: [AuthData]
})
export class LoginPage {

  public loginForm: any;


  constructor(public nav: NavController, public authData: AuthData, public formBuilder: FormBuilder) {
    this.nav = nav;
    this.authData = authData;

    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}

}
