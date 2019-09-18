import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  model: any = {};
  countries : any;
  subject : any;
  constructor() {
   }

  ngOnInit() {
    //Get country list.
    this.countries =[
      {"id" :1, "name": "NDA"},
      {"id" :2, "name": "SSC"},
      {"id" :3, "name": "Railway"},
      {"id" :4, "name": "Banking"},
     
    ];


    this.subject =[
      {"id" :1, "name": "Hindi"},
      {"id" :2, "name": "English"},
      {"id" :3, "name": "Scince"},
      {"id" :4, "name": "GK."},
     
    ];

   //Default selected country Id.
   //this.model.country = 5;
  }

  public onSubmitCustomer() {
    alert('Your information has been submitted successfully. :-)\n\n' + JSON.stringify(this.model))
  }
}