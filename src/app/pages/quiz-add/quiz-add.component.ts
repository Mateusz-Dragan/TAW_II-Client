import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'quiz-add',
  templateUrl: './quiz-add.component.html',
  styleUrls: ['./quiz-add.component.css']
})
export class QuizAddComponent implements OnInit {

  testObjectToSend!: FormGroup;
  question: any;
  reloading= false
  array!: FormArray;
  answerArray!: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  

    this.testObjectToSend = new FormGroup({
      test_name: new FormControl(),
      category: new FormControl(),
      points: new FormControl(),
      questionsArray: new FormArray([])
    })
  }

  get QuestionsArray(){
    return this.testObjectToSend.get('questionsArray') as FormArray
  }

  AnswersArray(val: any){
    return ((val.get('answers') as FormArray).value).controls;
  }


  generateQuestions(){
    this.array= new FormArray([])
    // console.log(this.array)
    for(let i = 0; i < this.testObjectToSend.value.points; i++){
      this.array.push(this.patchValues("",0, new FormArray ([new FormControl('AS'), new FormControl(''), new FormControl(''), new FormControl('')])))
    }
    this.testObjectToSend.controls['questionsArray'] = this.array
    return this.array
  }

  log(val: any) { console.log(val); }

  log2(val: any) { 
    console.log(((val.get('answers') as FormControl).value).controls);}

  patchValues(question_name: String, correct_answer: Number, answers: FormArray){
    return this.fb.group({
      question_name:[question_name],
      correct_answer:[correct_answer],
      answers:[answers]
    })
  }

  show(){
    //console.log(((this.QuestionsArray.controls)[0].get('answers') as FormControl).value)
    console.log((this.testObjectToSend.get('questionsArray') as FormArray).controls)
    console.log(((this.QuestionsArray.controls[0].get('answers') as FormControl).value).controls)
    //console.log(((this.QuestionsArray.controls[0].get('answers') as FormControl).value).controls)
    // console.log((this.QuestionsArray.controls[0].get('answers') as FormArray))
  }

  sendTest(){
    // console.log(this.testObjectToSend.value)
    // console.log(((this.testObjectToSend.get('questionsArray') as FormArray).value)[0].answers)
  }
}
