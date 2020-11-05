import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-generate',
  templateUrl: './qr-generate.component.html',
  styleUrls: ['./qr-generate.component.css']
})
export class QrGenerateComponent implements OnInit {

  QrValue: string = null;
  Width: number = 256;

  constructor() {
    this.QrValue = 'example code';
  }

  ngOnInit(): void {
  }

  changeQRVal(texto: string) {
    if (texto != '' ) this.QrValue = texto;
    else this.QrValue = 'example code';
  }

}
