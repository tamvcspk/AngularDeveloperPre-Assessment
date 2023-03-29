import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Question } from 'src/app/model/question';
import { AddQuestionDialogComponent } from '../add-question-dialog/add-question-dialog.component';
import { AnswersComponent } from '../answers/answers.component';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent {

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

  addQuestion() {
    const addQuestionDialogRef = this.dialog.open(AddQuestionDialogComponent, {
      disableClose: false
    });

    addQuestionDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        const newQuestion: Question = {
          question: result.question,
          options: result.options,
          questionType: result.questionType,
          allowOwnAnswer: result.allowOwnAnswer,
          required: result.required,
          answer: null
        };
        const answerDialogRef = this.dialog.open(AnswersComponent, {
          disableClose: false,
          data: newQuestion
        });

        answerDialogRef.afterClosed().subscribe(answer => {
          console.log(answer)
          if (answer.nextAction === 'addNewQuestion') {
            this.addQuestion();
          } else if (answer.nextAction === 'reviewMyAnswer') {
            this.router.navigate(['form/answers'], { state: { question: answer.question } });
          }
        });
      }
    });
  }
}
