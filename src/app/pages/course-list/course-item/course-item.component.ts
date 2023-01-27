import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input() id?: number;
  @Input() courseName?: string;
  @Input() category?: string;
  @Output() deleteCourse:EventEmitter<any>= new EventEmitter()

  constructor(private router: Router, private data: DataService) { }

  ngOnInit(): void {
  }
  
  goToCourse(): void {
    this.router.navigateByUrl('/course/' + this.id)
  }

  onClick(){
    this.deleteCourse.emit({id: this.id})
  }

  goToUpdateCourse(){
    this.router.navigateByUrl('/courseUpdate/' + this.id)
  }

}
