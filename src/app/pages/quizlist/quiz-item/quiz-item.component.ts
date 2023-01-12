import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  goToQuiz(): void{
    console.log(this.id)
  }

  ngOnInit(): void {
  }

}
