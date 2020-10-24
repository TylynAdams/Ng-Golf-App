import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuildOptionsService {
  teeType: string;
  playersNum: number;

  constructor() { }

  // tslint:disable-next-line: typedef
  setOptions(teeType: string, playersNum: number) {
    this.teeType = teeType;
    this.playersNum = playersNum;
  }

  // tslint:disable-next-line: typedef
  getTeeType() {
    return this.teeType;
  }

  // tslint:disable-next-line: typedef
  getPlayersNum() {
    return this.playersNum;
  }


}
