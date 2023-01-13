import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courses$: any;

  constructor(private service: DataService) { }

  ngOnInit(): void {
  this.getAll()
  }

  getAll(){
    this.service.getAllCourses().subscribe(response => {
      this.courses$ = response;
    });
  }

}
