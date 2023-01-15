import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-result-popup',
  templateUrl: './result-popup.component.html',
  styleUrls: ['./result-popup.component.css']
})
export class ResultPopupComponent implements OnInit {
  public results: any

  constructor(private service: DataService, private dialog: MatDialog,private router: Router, @Inject(MAT_DIALOG_DATA) public data: {user_id: number, test_id:number}) { }

  ngOnInit(): void {
    this.service.getUsersResultsFromTest(this.data.user_id, this.data.test_id).subscribe(response => {
      this.results = response;
    });
  }

  goHome(){
    this.router.navigateByUrl('/home')
    this.dialog.closeAll()
  }

}
