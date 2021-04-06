import { Component, OnInit } from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController, private navCtrl: NavController, private router: Router) { }
  logScrollStart(event) {
    console.log('logScrollStart: When Scroll Starts', event);
  }
  logScrolling(event) {
    console.log('logScrolling: When Scrolling', event);
  }
  logScrollEnd(event) {
    console.log('logScrollEnd : When Scroll Ends', event);
  }
  // openFirst() {
  //   this.menu.enable(true, 'first');
  //   this.menu.open('first');
  // }
  // openEnd() {
  //   this.menu.open('end');
  // }
  // openCustom() {
  //   this.menu.enable(true, 'custom');
  //   this.menu.open('custom');
  // }
  goPage(num) {
    switch (num) {
      case 1 :
        this.navCtrl.navigateForward('menu/page1');
        // this.router.navigate(['menu/page1']);
        break;
      case 2:
        // this.navCtrl.navigateForward('menu/page2');
        this.router.navigate(['menu/page2']);
        break;
      default:
        break;

    }
  }
  ngOnInit() {
  }

}
