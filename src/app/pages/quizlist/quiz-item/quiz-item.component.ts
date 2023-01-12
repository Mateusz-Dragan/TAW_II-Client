import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  goToQuiz(): void{
    this.router.navigateByUrl('/quiz/'+this.id)
  }

  ngOnInit(): void {
  }

}
