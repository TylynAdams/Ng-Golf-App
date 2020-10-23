import { CoursesService } from '../../shared/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  courses: Course[];

  constructor(
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe(courses => {
      this.courses = courses.courses;
    });
  }

}
