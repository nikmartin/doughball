import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SettingsService } from './settings.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public settings: any;

  constructor(private settingSvc: SettingsService, private nav: NavController) {
    this.settings = {};
  }

  ngOnInit() {
    this.settingSvc.getSettings().subscribe(settings => {
      this.settings = settings;
    });
  }
  saveSettings() {
    return this.settingSvc.saveSettings(this.settings);
  }
  back() {
    this.saveSettings().then(()=> this.nav.pop())

  }
}
