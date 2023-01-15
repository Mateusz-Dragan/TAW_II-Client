import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpObject:any ={
    name:'',
    username:'',
    password:''
  }
  constructor( private service: DataService, private router: Router) { }

  ngOnInit(): void {
}

onSubmit(){
    this.service.signUpUser(this.signUpObject).subscribe(response => {
      this.router.navigateByUrl('/signin')
    });
}

}
