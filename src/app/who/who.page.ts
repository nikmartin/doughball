import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who',
  templateUrl: './who.page.html',
  styleUrls: ['./who.page.scss'],
})
export class WhoPage implements OnInit {

  slideOpts = {
    autoplay: { delay: 3000 },
    initialSlide: 0,
    speed: 800,

  };
  constructor() { }

  ngOnInit() {
  }

}
