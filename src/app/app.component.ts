import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("amountInput") amountInput: any;
  title = 'currency-input-tests';
  form = new FormGroup({
    amount: new FormControl('')
  });

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.amountInput.nativeElement.focus();
  }
  onInputClick() {
    this.moveCursorToEnd(this.amountInput.nativeElement);
  }

  moveCursorToEnd(el: any) {
    if (typeof el.selectionStart == "number") {
        el.selectionStart = el.selectionEnd = el.value.length;
    } else if (typeof el.createTextRange != "undefined") {
        el.focus();
        var range = el.createTextRange();
        range.collapse(false);
        range.select();
    }
    console.log('moved curser to end?')
  }
}
