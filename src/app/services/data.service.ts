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

  getTestById(testId: string) {
    return this.http.get(this.url + '/api/test/' + testId);
  }

  getTestQuestionsById(testId: string) {
    return this.http.get(this.url + '/api/test/question/' + testId)
  }

  sendTest(test: { test_name: string, category: string, points: number }) {
    return this.http.post(this.url + '/api/test/add', test);
  }

  deleteTest(testId: number){
    return this.http.delete(this.url + '/api/test/remove/' + testId)
  }

  sendQuestions(question: { question: string, test_id: number, correct_answer: number, answers: Array<string> }) {
    return this.http.post(this.url + '/api/test/question/add', question);
  }

  sendAnswersToTest(userAnswers:{ test_id:number, user_id:number, user_answers:Array<number>}){
    return this.http.post(this.url + '/api/test/answer/add',userAnswers)
  }

  getUsersResultsFromTest(user_id:number, test_id:number){
    return this.http.get(this.url + `/api/te/results/${user_id}&${test_id}`)
  }

  getAllCourses(){
    return this.http.get(this.url + '/api/course');
  }

  getCourseById(courseId: string) {
    return this.http.get(this.url + '/api/course/' + courseId);
  }
  deleteCourse(courseId: number){
    return this.http.delete(this.url + '/api/course/remove/' + courseId)
  }

  getCourseMaterialsById(courseId: string){
    return this.http.get(this.url + '/api/course/material/' + courseId)
  }

  sendCourse(course: { course_name: string, category: string}) {
    return this.http.post(this.url + '/api/course/add', course);
  }

  sendCourseMaterials(course: { course_id:number, content:string}) {
    return this.http.post(this.url + '/api/course/material/add', course);
  }

  signUpUser(signUpObject:{name:string, username:string, password:string}){
    return this.http.post(this.url + '/api/user/signup', signUpObject)
  }

  signInUser(signInUser:{username:string, password:string}){
    return this.http.post(this.url + '/api/user/signin', signInUser)
  }
}
