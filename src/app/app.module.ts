import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { QuizlistComponent } from './pages/quizlist/quizlist.component';
import { HomeComponent } from './pages/home/home.component';
import { DataService } from './services/data.service';
import { QuizItemComponent } from './pages/quizlist/quiz-item/quiz-item.component';
import { QuizAddComponent } from './pages/quiz-add/quiz-add.component';
import { AddQuizComponent } from './pages/add-quiz/add-quiz.component';
import { SolveTestComponent } from './pages/solve-test/solve-test.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { CourseItemComponent } from './pages/course-list/course-item/course-item.component';
import { SolveCourseComponent } from './pages/solve-course/solve-course.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizlistComponent,
    HomeComponent,
    QuizItemComponent,
    QuizAddComponent,
    AddQuizComponent,
    SolveTestComponent,
    AddCourseComponent,
    CourseListComponent,
    CourseItemComponent,
    SolveCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatRadioModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
