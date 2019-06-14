import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionEditorComponent } from './components/question-editor/question-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }    from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    QuestionEditorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
