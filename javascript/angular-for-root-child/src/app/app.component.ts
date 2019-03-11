import { Component } from '@angular/core';
import { AService } from "./services/a.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'angular-for-root-child';
  public val;
  constructor(private aService: AService) {
    this.val = this.aService.getVal();
  }
}
