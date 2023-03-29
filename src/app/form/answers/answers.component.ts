import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent {
  answerForm: FormGroup;
  otherAnswer: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AnswersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Question,
    private fb: FormBuilder
  ) {
    this.answerForm = this.fb.group({
      paragraphAnswer: ['', data.required ? Validators.required : null],
      checkboxAnswers: this.fb.array([
      ]),
      otherAnswer: ['']
    });
    if (data.questionType === 'checkbox') {
      data.options.forEach(op => this.checkboxAnswers.push(this.fb.control(false)));
    }
  }

  get checkboxAnswers() {
    return this.answerForm.get('checkboxAnswers') as FormArray;
  }

  get checkboxAnswersLength() {
    return this.checkboxAnswers.length;
  }

  addNewQuestion() {
    this.dialogRef.close({
      nextAction: 'addNewQuestion'
    });
  }

  reviewMyAnswer() {
    this.dialogRef.close({
      question: { ...this.data, answer: this.answerForm.value },
      nextAction: 'reviewMyAnswer'
    });
  }
}
