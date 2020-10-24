import { Component, OnInit, Input } from '@angular/core';
import { CoursesService } from 'src/app/shared/courses.service';
import { BuildOptionsService } from 'src/app/shared/build-options.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss']
})
export class ScorecardComponent implements OnInit {
  displayedColumns: string[] = ['player', 'Hole 1', 'Hole 2', 'Hole 3', 'Hole 4', 'Hole 5', 'Hole 6', 'Hole 7', 'Hole 8', 'Hole 9', 'Hole 10', 'Hole 11', 'Hole 12', 'Hole 13', 'Hole 14', 'Hole 14', 'Hole 15', 'Hole 16', 'Hole 17', 'Hole 18'];
  dataSource = 'https://golf-courses-api.herokuapp.com/courses' ;


  constructor(
    private coursesService: CoursesService,
    private buildOptionsService: BuildOptionsService
  ) { }

  ngOnInit(): void {
  }
}
