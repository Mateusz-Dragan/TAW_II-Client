import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuizComponent } from './pages/add-quiz/add-quiz.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizAddComponent } from './pages/quiz-add/quiz-add.component';
import { QuizlistComponent } from './pages/quizlist/quizlist.component';
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
