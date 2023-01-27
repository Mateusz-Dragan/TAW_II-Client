import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-quizlist',
  templateUrl: './quizlist.component.html',
  styleUrls: ['./quizlist.component.css']
})
export class QuizlistComponent implements OnInit {

  public tests$: any;
  public currentTests$: any
  search = ''

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.service.getAllTests().subscribe(response => {
      this.tests$ = response;
      this.currentTests$ = this.tests$
    });
  }

  filterTestNames() {
    if (this.search === '') {
      this.currentTests$ = this.tests$
    }
    else {
      this.currentTests$ = this.tests$.filter((obj: { test_name: string | string[]; }) => {
        return obj.test_name.includes(this.search)
      })
    }
  }
  
  deleteTest(id: number) {
    console.log(id)
    if (id) {
      this.service.deleteTest(id).subscribe(response => { 
        this.currentTests$ = this.currentTests$.filter(function(obj: { id: number; }) {
          return obj.id !== id
        })
        this.tests$ = this.tests$.filter(function(obj: { id: number; }) {
          return obj.id !== id
        })
      })
    }
  }
}


