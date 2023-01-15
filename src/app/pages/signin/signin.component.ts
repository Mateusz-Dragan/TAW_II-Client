import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInObject: any = {
    username: '',
    password: ''
  }
  constructor(private service: DataService, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.signInUser(this.signInObject).subscribe(response => {
      localStorage.setItem('accessToken', JSON.stringify(response));
        if(this.auth.isLoggedIn()){
          this.router.navigateByUrl('/home')
        }
    });
}
}


