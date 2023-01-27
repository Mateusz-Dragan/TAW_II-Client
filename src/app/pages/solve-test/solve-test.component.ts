import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { ResultPopupComponent } from './result-popup/result-popup.component';


@Component({
  selector: 'app-solve-test',
  templateUrl: './solve-test.component.html',
  styleUrls: ['./solve-test.component.css']
})
export class SolveTestComponent implements OnInit {

  public test$: any;
  public questions$: any;
  currentQuestionIdx!: number;
  userAnswers =[0];
  id!: string

  constructor(private service: DataService, private route: ActivatedRoute, private router: Router, private auth: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.id = '';
    this.route.paramMap
      .subscribe((params: any) => {
        this.id = params.get('id');
      });
    
    this.service.getTestById(this.id).subscribe((res: any) => {
      this.test$ = res
    });

    this.service.getTestQuestionsById(this.id).subscribe((res: any) => {
      this.questions$ = res
      this.currentQuestionIdx=0
      this.userAnswers=[]
      for(let i = 0; i< this.questions$.length; i++){
        this.userAnswers.push(0)
      }
      console.log(this.userAnswers)
    });
  }

  openDialog(){
    this.dialog.open(ResultPopupComponent)
  }

  disableButton(){
    if(this.currentQuestionIdx === 0){
      return true
    }
    return false;
  }

  nextQuestion(){
    if(this.currentQuestionIdx < this.questions$.length - 1){
      this.currentQuestionIdx += 1
    }
    
  }

  previousQuestion(){
    if(this.currentQuestionIdx > 0){
      this.currentQuestionIdx -= 1
    }
  }

  sendAnswers(){
    let answersToSend={
      test_id: Number(this.id),
      user_id: this.auth.getData().id,
      user_answers: this.userAnswers
    }
    console.log(answersToSend)
    this.service.sendAnswersToTest(answersToSend).subscribe(response => {
      console.log(response)
      this.dialog.open(ResultPopupComponent,{data:{test_id: Number(this.id),
        user_id: this.auth.getData().id}})
    });
  }

  handleChange($event:MatRadioChange){
    this.userAnswers[this.currentQuestionIdx]= Number($event.value)
    console.log(this.userAnswers)
  }

  checkIfRadioButtonHasAnswer(i: number){
    if(this.userAnswers[this.currentQuestionIdx] === i){
      return true
    }
    else{
      return false
    }
  }

}
