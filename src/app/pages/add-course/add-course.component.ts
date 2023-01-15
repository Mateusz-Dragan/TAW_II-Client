import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  public course_id$: any;
  courseForm!: FormGroup;
  courseToSend = {
    course_name: '',
    category: '',
  }

  courseMaterialToSend = {
    content: '',
    course_id: 0
  }

  constructor(private fb: FormBuilder, private service: DataService, private router: Router) { }

  ngOnInit() {
    this.courseForm = this.fb.group({
      course_name: "",
      category: "",
      course_materials: this.fb.array([])
    });
  }

  courseMaterials(): FormArray {
    return this.courseForm.get('course_materials') as FormArray;
  }

  newCourseMaterial(): FormGroup {
    return this.fb.group({
      content: '',
    });
  }

  addCourseMaterial() {
    this.courseMaterials().push(this.newCourseMaterial());
  }

  removeCourseMaterial(empIndex: number) {
    this.courseMaterials().removeAt(empIndex);
  }


  sendCourseObject() {
    this.courseToSend = {
      course_name: this.courseForm.value.course_name,
      category: this.courseForm.value.category,
    }
    this.service.sendCourse(this.courseToSend).subscribe(response => {
      this.course_id$ = response;
      this.sendCourseMaterials(this.course_id$.id)
      console.log(this.course_id$)
    });

  }

  async sendCourseMaterials(course_id:number) {
    console.log(course_id)
    for (let i = 0; i < this.courseForm.value.course_materials.length; i++) {
      this.courseMaterialToSend={
        course_id: course_id,
        content: this.courseForm.value.course_materials[i].content
      }
      console.log(this.courseMaterialToSend)
      await this.service.sendCourseMaterials(this.courseMaterialToSend).subscribe(response => {
        console.log(response)
      })
    }
    this.router.navigateByUrl('/courselist')
  }



  onSubmit() {
    this.sendCourseObject()
  }
}
