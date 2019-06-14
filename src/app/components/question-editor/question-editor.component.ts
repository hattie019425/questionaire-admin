import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from 'src/app/services/question';
import { Option } from 'src/app/services/option';

@Component({
  selector: 'question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss']
})
export class QuestionEditorComponent implements OnInit {

  question: Question;
  editOption: Option;
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.question = new Question();
    this.editOption = new Option();
    this.questionService.getQuestions().subscribe(question => console.log(question));
  }

  add() {
    this.question.options.push(this.editOption);
    this.editOption = new Option();
  }

  delete(option) {
    const optionIndex = this.question.options.indexOf(option);
    this.question.options.splice(optionIndex);
  }
}
