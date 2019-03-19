import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';

@Component({
  selector: 'sank-carousel',
  templateUrl: './sank-carousel.component.html',
  styleUrls: ['./sank-carousel.component.css']
})
export class SankCarouselComponent implements OnInit {
  @Input() public autoplay: boolean = false;
  public images: string[];
  @ViewChild('owlElement') owlElement: OwlCarousel

  constructor() { }

  public ngOnInit() {
    this.images = ['https://source.unsplash.com/random/800x600', 'http://source.unsplash.com/user/hannahrodrigo/800x600'];
    if (this.autoplay) {
      setTimeout( () => {
        this.next();
      }, 3000)
    }
  }

  public next() {

  }

  public onLeft(event) {
    this.owlElement.previous([200]);
  }

  public onRight(event) {
    this.owlElement.next([200]);
  }

}
