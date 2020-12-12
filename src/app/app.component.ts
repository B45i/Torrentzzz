import { Component, OnInit } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
    text = '';
    isLoading = false;
    torrents: Array<any>;

    constructor(
        private http: HttpClient,
    public toastController: ToastController
    ) {
    }

    ngOnInit() {}

    onSearch() {
        this.isLoading = true;
        this.http
            .get(`https://thawing-hamlet-05815.herokuapp.com/search/${this.text}`)
            .subscribe((x: any) => {
                this.isLoading = false;
                this.torrents = x.torrents;
            });
    }

    copyMagnet(magnet: string) {
        let tempInput = document.createElement("input") as any;
        tempInput.style = "position: absolute; left: -1000px; top: -1000px";
        tempInput.value = magnet;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        
        this.toastController
          .create({
            message: 'Magnet Link Copied to Clipboard',
            duration: 2000,
          })
          .then((toast) => toast.present());
    }
}
