import { Injectable } from '@angular/core';

export class AService {
  private aServiceVal;
  constructor() { }

  getVal() {
    return this.aServiceVal;
  }

  setVal(val) {
    this.aServiceVal = val;
  }
}
