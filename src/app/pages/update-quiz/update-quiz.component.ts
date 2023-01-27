import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  public test$: any;
  public questions$: any;
  public test_id$: any;

  questionForm!: FormGroup;
  testToUpdate = {
    test_name: '',
    category: '',
    points: 0
  }

  questionToSend = {
    question: '',
    test_id: 0,
    correct_answer: 0,
    answers: ['']
  }

  constructor(private fb: FormBuilder, private service: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void{

    this.route.paramMap
      .subscribe((params: any) => {
        this.test_id$ = params.get('id');
      });
    
      this.service.getTestById(this.test_id$).subscribe((res: any) => {
        this.test$ = res
        this.questionForm = this.fb.group({
          test_name: this.test$.test_name,
          category: this.test$.category,
          questions: this.fb.array([])
        });
        this.service.getTestQuestionsById(this.test_id$).subscribe((res: any) => {
          this.questions$ = res
          for(let i = 0; i< this.questions$.length; i++){
            this.questions().push(this.fb.group({
              question: this.questions$[i].question,
              correct_answer: this.questions$[i].correct_answer,
              answers: this.fb.array([])
            }))
            for(let j = 0; j< this.questions$[i].answers.length;j++){
              this.questionAnswers(i).push(this.fb.group({
                answer: this.questions$[i].answers[j]
              }));
            }
            
          }
        })
      });

    
  }

  questions(): FormArray {
    return this.questionForm.get('questions') as FormArray;
  }

  newQuestion(): FormGroup {
    return this.fb.group({
      question: '',
      correct_answer: 0,
      answers: this.fb.array([])
    });
  }

  addQuestion() {
    this.questions().push(this.newQuestion());
  }

  removeQuestion(empIndex: number) {
    this.questions().removeAt(empIndex);
  }

  getAnswersLimit(val: any) {
    if (val.value.answers.length === 0)
      return 0
    return val.value.answers.length - 1
  }

  questionAnswers(empIndex: number): FormArray {
    return this.questions()
      .at(empIndex)
      .get('answers') as FormArray;
  }

  newAnswer(): FormGroup {
    return this.fb.group({
      answer: ''
    });
  }

  addAnswer(empIndex: number) {
    this.questionAnswers(empIndex).push(this.newAnswer());
  }

  removeAnswer(Index: number, answerIndex: number) {
    this.questionAnswers(Index).removeAt(answerIndex);
  }

  sendTestObject() {
    this.testToUpdate = {
      test_name: this.questionForm.value.test_name,
      category: this.questionForm.value.category,
      points: this.questionForm.value.questions.length
    }
    this.service.updateTest(this.test$.id, this.testToUpdate).subscribe(response => {
      this.sendQuestions()
    });

  }

  async sendQuestions() {
    for (let i = 0; i < this.questionForm.value.questions.length; i++) {
      this.questionToSend={
        question: this.questionForm.value.questions[i].question,
        test_id: this.test$.id,
        correct_answer: this.questionForm.value.questions[i].correct_answer,
        answers: this.addAnswersToArray((this.questionForm.value.questions[i].answers))
      }
      await this.service.sendQuestions(this.questionToSend).subscribe(response => {
      })
    }
    this.router.navigateByUrl('/quizlist')
  }

  addAnswersToArray(answers: any){
    let array = []
    for(let i = 0; i< answers.length; i++){
      array.push(answers[i].answer)
    }
    return array
  }


  onSubmit() {
    this.sendTestObject();
  }
}
