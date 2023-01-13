import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  public test_id$: any;
  questionForm!: FormGroup;
  testToSend = {
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

  constructor(private fb: FormBuilder, private service: DataService) { }

  ngOnInit() {
    this.questionForm = this.fb.group({
      test_name: "",
      category: "",
      questions: this.fb.array([])
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
    this.testToSend = {
      test_name: this.questionForm.value.test_name,
      category: this.questionForm.value.category,
      points: this.questionForm.value.questions.length
    }
    this.service.sendTest(this.testToSend).subscribe(response => {
      this.test_id$ = response;
      this.sendQuestions(this.test_id$.id)
      console.log(this.test_id$)
    });

  }

  async sendQuestions(test_id:number) {
    for (let i = 0; i < this.questionForm.value.questions.length; i++) {
      this.questionToSend={
        question: this.questionForm.value.questions[i].question,
        test_id: test_id,
        correct_answer: this.questionForm.value.questions[i].correct_answer,
        answers: this.addAnswersToArray((this.questionForm.value.questions[i].answers))
      }
      await this.service.sendQuestions(this.questionToSend).subscribe(response => {
        console.log(response)
      })
    }
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
