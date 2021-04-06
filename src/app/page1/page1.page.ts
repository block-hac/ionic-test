import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { NetworkProvider } from '../provider/network';
// import {NetworkProvider}

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  slideOpts={
    initialSlide: 1,
    speed: 400
  }
  constructor(
    private http: HttpClient,
    private network: NetworkProvider,
  ) { }
  ionViewWillEnter(){
    // this.network.getPasswordExpired();
  }
  getBlockHash() {
    const url = 'http://159.100.250.198:3841/getblockhash';
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    const options = {headers};
    const body = {blocknumber: 672814};
    this.http.post(url, body, options)
      .subscribe(data => {
        console.log(data);
      });
  }
  ngOnInit() {
  }

}
