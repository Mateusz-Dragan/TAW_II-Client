import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { AddQuizComponent } from './pages/add-quiz/add-quiz.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizlistComponent } from './pages/quizlist/quizlist.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SolveCourseComponent } from './pages/solve-course/solve-course.component';
import { SolveTestComponent } from './pages/solve-test/solve-test.component';
import { AuthguardGuard } from './shared/authguard.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signup'
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'quizlist',
    component: QuizlistComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'quiz/:id',
    component: SolveTestComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'quizadd',
    component: AddQuizComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'courselist',
    component: CourseListComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'courseadd',
    component: AddCourseComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'course/:id',
    component: SolveCourseComponent,
    canActivate: [AuthguardGuard]
  }
  // {
  //   path: '**',
  //   component: HomeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
