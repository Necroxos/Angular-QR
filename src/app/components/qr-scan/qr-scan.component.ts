import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';

@Component({
	selector: 'app-qr-scan',
	templateUrl: './qr-scan.component.html',
	styleUrls: ['./qr-scan.component.css'],
	encapsulation: ViewEncapsulation.None,
})
export class QrScanComponent implements OnInit {

	constructor() { }

	videoDevices: MediaDeviceInfo[] = [];
	choosenDev;
	scanned = false;
	valueQR;

	@ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent;

	ngOnInit() {

	}

	ngAfterViewInit(): void {

		this.qrScannerComponent.getMediaDevices().then(devices => {
			const videoDevices: MediaDeviceInfo[] = [];
			for (const device of devices) {
				if (device.kind.toString() === 'videoinput') {
					videoDevices.push(device);
					this.videoDevices.push(device);
				}
			}
			if (videoDevices.length > 0) {
				this.choosenDev;
				for (const dev of videoDevices) {
					if (dev.label.includes('front')) {
						this.choosenDev = dev;
						break;
					}
				}
				if (this.choosenDev) {
					this.qrScannerComponent.chooseCamera.next(this.choosenDev);
				} else {
					this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
				}
			}
		});

		this.qrScannerComponent.capturedQr.subscribe(result => {
			this.valueQR = result;
			this.scanned = true;
			setTimeout(() => this.scanned = false, 5000);
		});
	}

	changeDevice(device: string) {
		for (const dev of this.videoDevices) {
			if (dev.label.includes(device)) {
				this.choosenDev = dev;
				break;
			}
		}
		this.qrScannerComponent.chooseCamera.next(this.choosenDev);
	}

}
