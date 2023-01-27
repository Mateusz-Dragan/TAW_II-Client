import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.css']
})
export class QuizItemComponent implements OnInit {

  @Input() id?: number;
  @Input() testName?: string;
  @Input() category?: string;
  @Input() points?: number;
  @Output() deleteTest:EventEmitter<any>= new EventEmitter()

  constructor(private router: Router, private data: DataService) { }

  goToQuiz(): void {
    this.router.navigateByUrl('/quiz/' + this.id)
  }

  onClick(){
    this.deleteTest.emit({id: this.id})
  }

  goToUpdateQuiz(){
    this.router.navigateByUrl('/quizUpdate/' + this.id)
  }

  ngOnInit(): void {
  }

}
