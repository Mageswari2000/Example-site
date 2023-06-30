import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { tab } from '../dashboard.modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  tab=new tab();
  @Input() inputhome:any;
  @Output() outputboolean=new EventEmitter<object>()
  constructor() { }

  ngOnInit(): void {
    console.log(this.inputhome,"input")

  }

  ngOnDestroy() {
    console.log("output")
      this.tab.ishome=false
      this.outputboolean.emit(this.tab)
  }

}
