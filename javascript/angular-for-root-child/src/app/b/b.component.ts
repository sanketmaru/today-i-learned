import { Component, OnInit } from '@angular/core';
import { AService } from "../services/a.service";

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {
  public bValue: any;
  constructor(private aService: AService) {
    this.aService.setVal('b');
   }

  ngOnInit() {
    
    this.bValue = this.aService.getVal();
  }

}
