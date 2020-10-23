import { BuildOptionsService } from './../../shared/build-options.service';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../shared/courses.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss']
})
export class ScorecardComponent implements OnInit {

  constructor(
    private coursesService: CoursesService,
    private buildOptionsService: BuildOptionsService
  ) { }

  ngOnInit(): void {
  }

  // setTeeTypes(course) {
  //   course.data.holes[0].teeBoxes.map(teeBox => {
  //     if(teeBox.teeTypeId === 5) return;
  //     this.teeTypes.push(teeBox.teeType.charAt(0).toUpperCase() + teeBox.teeType.slice(1));
  //   });
  //   console.log(this.teeTypes);
  // }

  // buildScorecard() {
  //   this.buildOptionsService.setOptions(this.teeType, this.playersNum);
  //   const teeType = this.buildOptionsService.getTeeType();
  //   console.log(teeType);
  // }

}
