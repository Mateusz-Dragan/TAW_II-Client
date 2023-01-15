import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private router: Router, private data: DataService) { }

  goToQuiz(): void {
    this.router.navigateByUrl('/quiz/' + this.id)
  }

  deleteTest() {
    if (this.id) {
      this.data.deleteTest(this.id).subscribe(response => { })
      window.location.reload()
    }
  }

  ngOnInit(): void {
  }

}
