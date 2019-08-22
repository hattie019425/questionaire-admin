import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  public getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>("http://localhost:3001/question");
  }

  public removeQuestion(question: Question): Observable<any> {
    return this.http.delete("http://localhost:3001/question/" + question._id);
  }
  
  public saveQuestion(question: Question): Observable<any> {
    console.log(question);
    return this.http.post("http://localhost:3001/question", question);
  }

}
