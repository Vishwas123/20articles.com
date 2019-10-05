import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  submitted: boolean = false;
  success: boolean =  false;

  constructor() {
    // this.messageForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   message: ['', Validators.required]
    // })
  }

  // onSubmit(){
  //   this.submitted = true;

  //   if(this.messageForm.invalid){
  //     return;
  //   }

  //   this.success = true;
  // }


  ngOnInit() {
  }

}
