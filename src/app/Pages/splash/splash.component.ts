import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(4000)),
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('3000ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('3000ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class SplashComponent  implements OnInit {

  constructor(public router:Router) {

  }

 ngOnInit() {
    // SplashScreen.hide();
   setTimeout(()=>{
     this.router.navigateByUrl('inicio')
   },4000)
 }

}
