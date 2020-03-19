import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule  } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
