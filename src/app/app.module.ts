import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionEditorComponent } from './components/question-editor/question-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }    from '@angular/forms';
import { QuestionListComponent } from './components/question-list/question-list/question-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    AppComponent,
    QuestionEditorComponent,
    QuestionListComponent,
    ButtonComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
