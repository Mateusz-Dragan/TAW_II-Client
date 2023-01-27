import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
