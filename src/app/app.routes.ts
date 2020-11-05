import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QrGenerateComponent } from './components/qr-generate/qr-generate.component';
import { QrScanComponent } from './components/qr-scan/qr-scan.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'generador', component: QrGenerateComponent },
    { path: 'lector', component: QrScanComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
