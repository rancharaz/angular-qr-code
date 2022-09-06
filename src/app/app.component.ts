import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser'; //safeUrl for downloading the QRcode

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public myAngularxQrCode: string = ""; //set  myAngularxQrCode as string
/*   public qrCodeDownload: SafeUrl = "";  *///set safeUrl as string

  constructor () {
    this.myAngularxQrCode = 'https://www.youtube.com/'; // url to open QR
  }
/*   onChangeUrl(url: SafeUrl){
    this.qrCodeDownload = url; //integrate url in the function
  } */
}
