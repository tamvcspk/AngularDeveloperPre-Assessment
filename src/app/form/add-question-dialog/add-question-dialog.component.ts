import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-add-question-dialog',
  templateUrl: './add-question-dialog.component.html',
  styleUrls: ['./add-question-dialog.component.scss']
})
export class AddQuestionDialogComponent {

  questionForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddQuestionDialogComponent>,
    private fb: FormBuilder) {
    this.questionForm = this.fb.group({
      question: ['', Validators.required],
      questionType: ['paragraph'],
      options: this.fb.array([
        this.fb.control('')
      ]),
      allowOwnAnswer: [false],
      required: [false]
    })
  }

  get questionType() {
    return this.questionForm.get('questionType')?.value;
  }

  get options() {
    return this.questionForm.get('options') as FormArray;
  }

  get optionsLength() {
    return this.options.length;
  }

  addOption() {
    if (this.optionsLength < 5) {
      this.options.push(this.fb.control(''));
    }
  }

  submit() {
    if (this.questionForm.valid) {
      this.dialogRef.close(this.questionForm.value);
    }
  }
}
