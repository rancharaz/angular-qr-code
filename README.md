1. Installing qrcode library in the project 
npm install angularx-qrcode -save  

2. Adding QRcodeModule into the @NgModule found into the app.module.ts

@NgModule({
  imports: [BrowserModule, FormsModule, QRCodeModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})

3. Add the code below in the app.component.ts file

export class AppComponent {
  public myAngularxQrCode: string = ""; // the variable is in string

  constructor () {
    this.myAngularxQrCode = 'https://www.youtube.com/'; // link on which it shall open
  }
}

4. Adding the code below in app.component.html

<qrcode [qrdata]="myAngularxQrCode" [width]="256" [errorCorrectionLevel]="'M'"></qrcode> // myAngularxQrCode is the variable on which it shall open

5. Adding SafeUrl dependency for downloading the QRcode with the onChangeUrl on in component.ts file

import { SafeUrl } from '@angular/platform-browser'; 
public qrCodeDownload: SafeUrl = ""; //set safeUrl as string


  onChangeUrl(url: SafeUrl){
    this.qrCodeDownload = url; //integrate url in the function
  }

6. adding (qrCodeURL)="onChangeUrl($event)" into app.component.html to activate the function

<qrcode (qrCodeURL)="onChangeUrl($event)" [qrdata]="myAngularxQrCode" [width]="256" [errorCorrectionLevel]="'M'"></qrcode>
