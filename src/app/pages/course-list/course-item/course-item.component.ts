import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input() id?: number;
  @Input() courseName?: string;
  @Input() category?: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToCourse(): void{
    this.router.navigateByUrl('/course/'+this.id)
  }

}
