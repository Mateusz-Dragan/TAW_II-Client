import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { AddQuizComponent } from './pages/add-quiz/add-quiz.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizAddComponent } from './pages/quiz-add/quiz-add.component';
import { QuizlistComponent } from './pages/quizlist/quizlist.component';
import { SolveCourseComponent } from './pages/solve-course/solve-course.component';
import { SolveTestComponent } from './pages/solve-test/solve-test.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'quizlist',
    component: QuizlistComponent
  },
  {
    path: 'quiz/:id',
    component: SolveTestComponent
  },
  {
    path: 'quizadd',
    component: AddQuizComponent
  },
  {
    path: 'courselist',
    component: CourseListComponent
  },
  {
    path: 'courseadd',
    component: AddCourseComponent
  },
  {
    path: 'course/:id',
    component: SolveCourseComponent
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
