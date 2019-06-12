import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.getQuestions().subscribe(question => console.log(question));
  }

}
