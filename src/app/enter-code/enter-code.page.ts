import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.page.html',
  styleUrls: ['./enter-code.page.scss'],
})
export class EnterCodePage implements OnInit {

  private confirmationCode: string = "";
  private phone: string = "+54 1127104325";

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  enterToTabsPage () {
    this.navCtrl.navigateRoot('tabs/tabs')
  }

}
