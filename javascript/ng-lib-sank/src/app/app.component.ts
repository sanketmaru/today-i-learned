import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-lib-sank-app';
  public imagesData = [];
  constructor() {
    this.imagesData = [{
      title: 'Image 1',
      description: 'Image 1 desc',
      image: 'https://www.isoi.edu.pk/system/files/node_gallery/13997705508_a218e00c81_b_1.jpeg'
    }, {
      title: 'Image 1',
      description: 'Image 1 desc',
      image: 'https://www.isoi.edu.pk/system/files/node_gallery/sample1_l_1.jpeg'
    }];
  }
}
