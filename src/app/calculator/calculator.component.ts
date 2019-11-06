import { Component, OnInit } from '@angular/core';

// @Component decorator with meta-data selector, templateUrl and styleUrls
// the selector is a tag name used to reference the component from other templates
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;

  constructor() { }

  ngOnInit() {
  }

  //Method to get the current number
  public getNumber(no: string) {
    if(this.waitForSecondNumber) {
      this.currentNumber = no;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = no : this.currentNumber += no;
    }
  }

  // Appends decimal point to the current number.
  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  // Method to perform calculation depending on the operator
  private doCalculation(op, secondOperand) {
    switch(op) {
      case '+':
        return this.firstOperand += secondOperand;
      case '-':
        return this.firstOperand -= secondOperand;
      case '*':
        return this.firstOperand *= secondOperand;
      case '/':
        return this.firstOperand /= secondOperand;
      case '=':
        return secondOperand;
    }
  }

  // method to get the performed operation
  public getOperation(op: string) {
    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(this.operator, Number(this.currentNumber));
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;
  }

  // method to clear the result area and reset the calculations
  public clear() {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
}

