import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }
  
  getAllTests() {
    return this.http.get(this.url + '/api/test');
  }

  // sendTest(): void{
  //   this.http.post(this.url + '/api/test/add');
  // }
  // sendQuestions(): void{

  // }
}
