import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { QRCodeModule } from 'angularx-qrcode';

import { AppComponent } from './app.component';

// Rutas
import { APP_ROUTING } from './app.routes';

// Componentes
import { QrGenerateComponent } from './components/qr-generate/qr-generate.component';
import { QrScanComponent } from './components/qr-scan/qr-scan.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    QrGenerateComponent,
    QrScanComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgQrScannerModule,
    QRCodeModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
