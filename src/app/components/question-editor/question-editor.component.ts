import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from 'src/app/services/question';
import { Option } from 'src/app/services/option';

@Component({
  selector: 'question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.scss']
})
export class QuestionEditorComponent implements OnInit {

  @Input() question: Question;
  @Output() voted = new EventEmitter<boolean>();
  
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    if (!this.question) {
      this.question = new Question();
      this.addOption();
    }
  }

  addOption() {
    this.question.options.push(new Option());
  }

  deleteOption(option: Option) {
    const optionIndex = this.question.options.indexOf(option);
    this.question.options.splice(optionIndex, 1);
  }

  saveQuestion() {
    this.questionService.saveQuestion(this.question).subscribe((res) => console.log(res));
  }

}
