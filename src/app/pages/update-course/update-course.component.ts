import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  public course$: any;
  public courseMaterials$: any;
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

  constructor(private fb: FormBuilder, private service: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap
      .subscribe((params: any) => {
        this.course_id$ = params.get('id');
      });

    this.service.getCourseById(this.course_id$).subscribe((res: any) => {
      this.course$ = res
      this.courseForm = this.fb.group({
        course_name: this.course$.course_name,
        category: this.course$.category,
        course_materials: this.fb.array([])
      });
      this.service.getCourseMaterialsById(this.course_id$).subscribe((res: any) => {
        this.courseMaterials$ = res
        for (let i = 0; i < this.courseMaterials$.length; i++) {
          this.courseMaterials().push(this.fb.group({
            content: this.courseMaterials$[i].content,
          }))
        }
      })
    })
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
    this.service.updateCourse(this.course$.id,this.courseToSend).subscribe(response => {
      this.sendCourseMaterials()
      console.log(this.course_id$)
    });

  }

  async sendCourseMaterials() {
    for (let i = 0; i < this.courseForm.value.course_materials.length; i++) {
      this.courseMaterialToSend = {
        course_id: this.course$.id,
        content: this.courseForm.value.course_materials[i].content
      }
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