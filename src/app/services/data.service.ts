import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class DataService {

  private url = 'http://localhost:3000';
  header
   

  constructor(private http: HttpClient, private auth: AuthService) {
    if(this.auth.isLoggedIn()){
      this.header = {
        headers: new HttpHeaders()
          .set('x-access-token',  `${this.auth.getData().accessToken}`)
      }
    }
    
  }

  getAllTests() {
    return this.http.get(this.url + '/api/test', this.header);
  }

  getTestById(testId: string) {
    return this.http.get(this.url + '/api/test/' + testId, this.header);
  }

  getTestQuestionsById(testId: string) {
    return this.http.get(this.url + '/api/test/question/' + testId, this.header)
  }

  sendTest(test: { test_name: string, category: string, points: number }) {
    return this.http.post(this.url + '/api/test/add', test, this.header);
  }

  deleteTest(testId: number){
    return this.http.delete(this.url + '/api/test/remove/' + testId, this.header)
  }

  updateTest(testId: number, test: { test_name: string, category: string, points: number }){
    return this.http.put(this.url + '/api/test/update/' + testId, test, this.header)
  }

  sendQuestions(question: { question: string, test_id: number, correct_answer: number, answers: Array<string> }) {
    return this.http.post(this.url + '/api/test/question/add', question, this.header);
  }

  sendAnswersToTest(userAnswers:{ test_id:number, user_id:number, user_answers:Array<number>}){
    return this.http.post(this.url + '/api/test/answer/add',userAnswers, this.header)
  }

  getUsersResultsFromTest(user_id:number, test_id:number){
    return this.http.get(this.url + `/api/te/results/${user_id}&${test_id}`, this.header)
  }

  getAllCourses(){
    return this.http.get(this.url + '/api/course', this.header);
  }

  getCourseById(courseId: string) {
    return this.http.get(this.url + '/api/course/' + courseId, this.header);
  }
  
  deleteCourse(courseId: number){
    return this.http.delete(this.url + '/api/course/remove/' + courseId, this.header)
  }

  getCourseMaterialsById(courseId: string){
    return this.http.get(this.url + '/api/course/material/' + courseId, this.header)
  }

  sendCourse(course: { course_name: string, category: string}) {
    return this.http.post(this.url + '/api/course/add', course, this.header);
  }

  updateCourse(courseId: number, course: { course_name: string, category: string}){
    return this.http.put(this.url + '/api/course/update/' + courseId, course, this.header)
  }

  sendCourseMaterials(course: { course_id:number, content:string}) {
    return this.http.post(this.url + '/api/course/material/add', course, this.header);
  }

  signUpUser(signUpObject:{name:string, username:string, password:string}){
    return this.http.post(this.url + '/api/user/signup', signUpObject)
  }

  signInUser(signInUser:{username:string, password:string}){
    return this.http.post(this.url + '/api/user/signin', signInUser)
  }
}
