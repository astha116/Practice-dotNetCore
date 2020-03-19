import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AsthaWebApp';
  userForm : FormGroup;
  get : any;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
  ){
    this.userForm = this.formBuilder.group({
    // id: [''],
    name: ['']
  });
  }
  ngOnInit(): void {
    this.userService.getUser().subscribe(d=>{ this.get= d; console.log("hello",this.get);});
  }
  
  onSubmit(){
    console.log(this.userForm.value);
    this.userService.postUser(this.userForm.value).subscribe(d =>this.get.push(d)
    );
  }
}
