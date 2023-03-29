import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { MatButtonModule } from '@angular/material/button';
import { BuilderComponent } from './form/builder/builder.component';
import { AnswersComponent } from './form/answers/answers.component';
import { AddQuestionDialogComponent } from './form/add-question-dialog/add-question-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ReviewAnswerComponent } from './form/review-answer/review-answer.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    BuilderComponent,
    AnswersComponent,
    AddQuestionDialogComponent,
    ReviewAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
