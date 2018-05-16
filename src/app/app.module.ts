import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//Pages
import { 
MyApp,
HomePage,
ListPage,
InventoryPage,
ModalOptions,
ModalOptions2Page
 } from "../pages/index.pages";

 //providers
 import { DataFinder } from "../providers/index.providers";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    InventoryPage,
    ModalOptions,
    ModalOptions2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    InventoryPage,
    ModalOptions,
    ModalOptions2Page
  ],
  providers: [
    DataFinder,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
