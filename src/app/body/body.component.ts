import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  hazul:any='Hazul Grace Lebron James';

  constructor() { }

  ngOnInit(): void {
  }

  typesOfShoes: string[] = ['Basketball', 'Table Tennis', 'Bullying', 'Smirking', 'Sleeping'];

}
