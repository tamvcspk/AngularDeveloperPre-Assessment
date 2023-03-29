import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderComponent } from './form/builder/builder.component';
import { FormComponent } from './form/form.component';
import { ReviewAnswerComponent } from './form/review-answer/review-answer.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'form', pathMatch: 'full'
  },
  {
    path: 'form', component: FormComponent,
    children: [
      {
        path: '', redirectTo: 'builder', pathMatch: 'full'
      },
      { path: 'builder', component: BuilderComponent },
      { path: 'answers', component: ReviewAnswerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
