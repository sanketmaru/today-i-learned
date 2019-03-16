import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sank-carousel',
  templateUrl: './sank-carousel.component.html',
  styleUrls: ['./sank-carousel.component.css']
})
export class SankCarouselComponent implements OnInit {
  @Input() public autoplay: boolean = false;

  constructor() { }

  public ngOnInit() {
    if (this.autoplay) {
      setTimeout( () => {
        this.next();
      }, 3000)
    }
  }

  public next() {

  }

  public onLeft(event) {

  }

  public onRight(event) {
    
  }

}
