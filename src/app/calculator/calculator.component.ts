import { Component, OnInit } from '@angular/core';

// @Component decorator with meta-data selector, templateUrl and styleUrls
// the selector is a tag name used to reference the component from other templates
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

