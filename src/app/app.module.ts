import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {LoginPage} from '../pages/login/login';
import {RegistroPage} from '../pages/registro/registro';
import { UsuariosPage} from '../pages/usuarios/usuarios';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// var config = {
//   apiKey: "AIzaSyC5yDN_DjhLHlsIxw6Mszh1YnbxhNXWR9M",
//   authDomain: "reportes-552ff.firebaseapp.com",
//   databaseURL: "https://reportes-552ff.firebaseio.com",
//   projectId: "reportes-552ff",
//   storageBucket: "reportes-552ff.appspot.com",
//   messagingSenderId: "146952253239"
// };
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegistroPage,
    UsuariosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegistroPage,
    UsuariosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
