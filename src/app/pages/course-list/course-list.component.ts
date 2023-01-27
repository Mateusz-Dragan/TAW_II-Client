import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courses$: any;
  public currentCourses$: any
  search=''

  constructor(private service: DataService) { }

  ngOnInit(): void {
  this.getAll()
  }

  getAll(){
    this.service.getAllCourses().subscribe(response => {
      this.courses$ = response;
      this.currentCourses$ = this.courses$
    });
  }

  filterCourseNames(){
    if(this.search === ''){
      this.currentCourses$ = this.courses$
    }
    else{
      this.currentCourses$=this.courses$.filter((obj: { course_name: string | string[]; })=>{
        return obj.course_name.includes(this.search)
      })
    }
  }

  deleteCourse(id: number) {
    console.log(id)
    if (id) {
      this.service.deleteCourse(id).subscribe(response => { 
        this.currentCourses$ = this.currentCourses$.filter(function(obj: { id: number; }) {
          return obj.id !== id
        })
        this.courses$ = this.courses$.filter(function(obj: { id: number; }) {
          return obj.id !== id
        })
      })
    }
  }
}
