import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {SplashScreen} from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router)
  {
    this.router.navigateByUrl("/splash");
  }
  ionViewDidEnter(){
    SplashScreen.hide();
    }
}
