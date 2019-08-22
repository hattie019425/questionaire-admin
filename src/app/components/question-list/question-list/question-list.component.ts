import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/services/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  questions: Question[] = [];
  newQuestion: Question;
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.refreshQuestionList();
  }

  refreshQuestionList() {
    this.questionService.getQuestions().subscribe(questions => this.questions = questions);
  }

  edit(question: Question) {
    console.log(question);
  }

  remove(question: Question) {
    this.questionService.removeQuestion(question).subscribe(question => this.refreshQuestionList());
  }

  addQuestion(){
    this.newQuestion = new Question();
  }
}
