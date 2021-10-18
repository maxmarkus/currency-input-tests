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
}
