import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth, Auth } from '@angular/fire/auth';
import { AuthComponent } from './Pages/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire/compat';
import { PrincipalComponent } from './Pages/principal/principal.component';
import { SplashComponent } from './Pages/splash/splash.component';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';


@NgModule({
  declarations: [AppComponent,
  PrincipalComponent, AuthComponent, SplashComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, NativeAudio],
  bootstrap: [AppComponent],
})
export class AppModule {}
