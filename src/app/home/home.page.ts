import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../settings/settings.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  settings: any;
  quantity = 3;
  size = 300;
  flour = 0;
  water = 0;
  yeast = 0;
  salt = 0;
  evoo = 0;
  settingsSub: Subscription;

  constructor(private settingSvc: SettingsService) {
    this.settings = {};
  }

  ngOnInit() {
    console.log(this.constructor.name);


  }

  ionViewWillEnter() {
    if (this.settingsSub) {
      this.settingsSub.unsubscribe();
    }
    this.settingsSub = this.settingSvc.getSettings().subscribe(settings => {
      this.settings = settings;
      this.calc();
    });

  }
  calc() {
    const amt = this.size;
    const pct = (100 + this.settings.hydration + this.settings.yeast + this.settings.salt + this.settings.oo) / 100;
    this.flour = Math.ceil(this.quantity * (amt / pct));
    this.water = Math.ceil(this.flour * (this.settings.hydration / 100));
    this.yeast = +(this.flour * (this.settings.yeast / 100)).toFixed(1);
    this.salt = +(this.flour * (this.settings.salt / 100)).toFixed(1);
    this.evoo = +(this.flour * (this.settings.oo / 100)).toFixed(1);
  }


}
