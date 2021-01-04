import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private settings: any;
  private defaults: any;
  private obs: Subscriber<any>;
  constructor(private storage: Storage) {
    this.settings = {};
    this.defaults = {
      hydration: 60,
      yeast: .75,
      salt: 2,
      oo: 1.5
    };
  }

  getSettings(): Observable<any> {

    return new Observable((observer) => {
      this.obs = observer;
      // observer.complete();

      this.storage.get('settings').then(settings => {
        if (!settings || isNaN(settings.hydration)) {
          this.settings = Object.assign(this.settings, this.defaults);
          this.saveSettings(this.settings).then(val => {
            this.obs.next(val);
          });
        } else {
          this.settings = settings;
          this.obs.next(this.settings);
        }
      });
    });

  }
  async saveSettings(settings: any) {
    const val = await this.storage.set('settings', settings);
    this.settings = val;
  }


}
