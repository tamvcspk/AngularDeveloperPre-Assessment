import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-review-answer',
  templateUrl: './review-answer.component.html',
  styleUrls: ['./review-answer.component.scss']
})
export class ReviewAnswerComponent {
  question: Question;
  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    this.question = state['question'];
    console.log(this.question)
  }

  back() {
    this.router.navigate(['form/builder']);
  }
}
