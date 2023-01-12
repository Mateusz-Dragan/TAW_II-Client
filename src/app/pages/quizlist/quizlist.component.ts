import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-quizlist',
  templateUrl: './quizlist.component.html',
  styleUrls: ['./quizlist.component.css']
})
export class QuizlistComponent implements OnInit {

  public tests$: any;
  constructor(private service: DataService) { }

  ngOnInit(): void {
  this.getAll()
  }

  getAll(){
    this.service.getAllTests().subscribe(response => {
      this.tests$ = response;
    });
  }
}


