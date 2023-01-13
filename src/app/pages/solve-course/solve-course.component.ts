import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-solve-course',
  templateUrl: './solve-course.component.html',
  styleUrls: ['./solve-course.component.css']
})
export class SolveCourseComponent implements OnInit {

  public course$: any;
  public courseMaterials$: any;
  currentMaterialIdx!: number;
  
  constructor(private service: DataService, private route: ActivatedRoute, private router: Router) { 
    let id = '';
    this.route.paramMap
      .subscribe((params: any) => {
        id = params.get('id');
      });
    
    this.service.getCourseById(id).subscribe((res: any) => {
      this.course$ = res
    });

    this.service.getCourseMaterialsById(id).subscribe((res: any) => {
      this.courseMaterials$ = res
      this.currentMaterialIdx=0
      
    });
  }

  ngOnInit(): void {
  }

  nextMaterial(){
    if(this.currentMaterialIdx < this.courseMaterials$.length - 1){
      this.currentMaterialIdx += 1
    }
    
  }

  previousMaterial(){
    if(this.currentMaterialIdx > 0){
      this.currentMaterialIdx -= 1
    }
  }

  disableButton(){
    if(this.currentMaterialIdx === 0){
      return true
    }
    return false;
  }

  goToPage(){
    this.router.navigateByUrl('/courselist')
  }

}
