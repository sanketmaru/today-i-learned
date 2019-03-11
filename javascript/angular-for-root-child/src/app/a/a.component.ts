import { Component, OnInit } from '@angular/core';
import { AService } from "../services/a.service";

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {
  public aValue: any;
  constructor(private aService: AService) {
    this.aService.setVal('a');
  }

  ngOnInit() {
    this.aValue = this.aService.getVal();
  }

}
