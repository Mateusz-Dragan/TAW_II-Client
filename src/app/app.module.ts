import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { QuizlistComponent } from './pages/quizlist/quizlist.component';
import { HomeComponent } from './pages/home/home.component';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { QuizItemComponent } from './pages/quizlist/quiz-item/quiz-item.component';
import { AddQuizComponent } from './pages/add-quiz/add-quiz.component';
import { SolveTestComponent } from './pages/solve-test/solve-test.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { CourseItemComponent } from './pages/course-list/course-item/course-item.component';
import { SolveCourseComponent } from './pages/solve-course/solve-course.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizlistComponent,
    HomeComponent,
    QuizItemComponent,
    AddQuizComponent,
    SolveTestComponent,
    AddCourseComponent,
    CourseListComponent,
    CourseItemComponent,
    SolveCourseComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatRadioModule,
    MatCardModule,
    MatFormFieldModule,
    
  ],
  providers: [DataService, AuthService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
